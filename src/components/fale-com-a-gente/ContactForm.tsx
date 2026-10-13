"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type FormEvent, type HTMLAttributes } from "react";
import { FONT_DISPLAY, ROUTES } from "@/lib/site";

type FieldKey = "nome" | "email" | "celular" | "empresa" | "cargo" | "pessoas" | "volume" | "quem" | "privacidade";
type Errors = Partial<Record<FieldKey, true>>;
type Sent = { nome: string; email: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Mesmas regras do protótipo. Devolve só os campos com erro. */
function validate(data: FormData): Errors {
  const val = (n: string) => String(data.get(n) ?? "").trim();
  const errors: Errors = {};
  if (val("nome").length < 3) errors.nome = true;
  if (!EMAIL_RE.test(val("email"))) errors.email = true;
  if (val("celular").replace(/\D/g, "").length < 10) errors.celular = true;
  if (!val("empresa")) errors.empresa = true;
  if (!val("cargo")) errors.cargo = true;
  if (!val("pessoas")) errors.pessoas = true;
  if (!val("volume")) errors.volume = true;
  if (!val("quem")) errors.quem = true;
  if (!data.has("privacidade")) errors.privacidade = true;
  return errors;
}

const borderColor = (invalid: boolean | undefined) => (invalid ? "#B42318" : "#8A94A6");

const fieldStyle: CSSProperties = { display: "flex", flexDirection: "column", gap: 6 };
const labelStyle: CSSProperties = { fontSize: 14, fontWeight: 700 };
const errorStyle: CSSProperties = { fontSize: 13, fontWeight: 600, color: "#B42318" };
const optionalStyle: CSSProperties = { fontWeight: 500, color: "#5B6478" };
const gridStyle: CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "18px 16px" };
const inputStyle = (border: string): CSSProperties => ({ height: 48, padding: "0 14px", borderRadius: 12, border: `1.5px solid ${border}`, background: "#FFFFFF", fontSize: 16 });
const selectStyle = (border: string): CSSProperties => ({ width: "100%", height: 48, padding: "0 44px 0 14px", borderRadius: 12, border: `1.5px solid ${border}`, background: "#FFFFFF", fontSize: 16 });
const optStyle = (border: string): CSSProperties => ({ display: "flex", alignItems: "center", gap: 10, minHeight: 52, padding: "10px 14px", borderRadius: 12, border: `1.5px solid ${border}`, fontSize: 15, fontWeight: 600, cursor: "pointer" });
const checkLabelStyle: CSSProperties = { display: "flex", alignItems: "flex-start", gap: 12, minHeight: 44, fontSize: 15, lineHeight: 1.5, cursor: "pointer" };

function Required() {
  return (
    <span aria-hidden="true" style={{ color: "#B42318" }}>
      *
    </span>
  );
}

type TextFieldProps = {
  id: string;
  errorId: string;
  name: FieldKey;
  label: string;
  type: "text" | "email" | "tel";
  autoComplete: string;
  inputMode?: HTMLAttributes<HTMLInputElement>["inputMode"];
  placeholder?: string;
  error: string;
  invalid?: boolean;
};

function TextField({ id, errorId, name, label, type, autoComplete, inputMode, placeholder, error, invalid }: TextFieldProps) {
  return (
    <div style={fieldStyle}>
      <label htmlFor={id} style={labelStyle}>
        {label} <Required />
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        aria-required="true"
        aria-invalid={!!invalid}
        aria-describedby={errorId}
        style={inputStyle(borderColor(invalid))}
      />
      {invalid && (
        <span id={errorId} style={errorStyle}>
          {error}
        </span>
      )}
    </div>
  );
}

type SelectFieldProps = {
  name: "pessoas" | "volume";
  label: string;
  options: string[];
  invalid?: boolean;
};

function SelectField({ name, label, options, invalid }: SelectFieldProps) {
  const id = `f-${name}`;
  const errorId = `e-${name}`;
  return (
    <div style={fieldStyle}>
      <label htmlFor={id} style={labelStyle}>
        {label} <Required />
      </label>
      <div style={{ position: "relative" }}>
        <select id={id} name={name} aria-required="true" aria-invalid={!!invalid} aria-describedby={errorId} style={selectStyle(borderColor(invalid))}>
          <option value="">Selecione</option>
          {options.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
        <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ position: "absolute", right: 14, top: 15, pointerEvents: "none", color: "#475569", strokeWidth: 2 }}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
      {invalid && (
        <span id={errorId} style={errorStyle}>
          Escolha uma faixa.
        </span>
      )}
    </div>
  );
}

const PESSOAS = ["Até 50", "De 51 a 200", "De 201 a 1.000", "Mais de 1.000"];
const VOLUME = ["Até R$ 100 mil", "De R$ 100 mil a R$ 300 mil", "De R$ 300 mil a R$ 1 milhão", "Mais de R$ 1 milhão", "Ainda não sei"];
const QUEM = ["Empregados da empresa", "Pessoas de empresas parceiras", "Os dois"];

/** Formulário "Pedir uma proposta" e o estado de enviado. Só no cliente, sem backend. */
export default function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState<Sent | null>(null);
  const sentRef = useRef<HTMLDivElement>(null);
  const sentTitleRef = useRef<HTMLHeadingElement>(null);
  const hasErrors = Object.keys(errors).length > 0;

  // O botão Enviar fica no fim do formulário, e o estado de enviado é bem mais curto que ele:
  // sem isto, quem rolou até o botão ficaria olhando o rodapé e perderia o foco do teclado.
  useEffect(() => {
    if (!sent) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    sentRef.current?.scrollIntoView({ block: "center", behavior: reduce ? "auto" : "smooth" });
    sentTitleRef.current?.focus({ preventScroll: true });
  }, [sent]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const found = validate(data);
    if (Object.keys(found).length) {
      setErrors(found);
      return;
    }
    const nome = String(data.get("nome")).trim();
    const email = String(data.get("email")).trim();
    // TODO: enviar os dados do formulário para o backend/CRM quando houver integração.
    setErrors({});
    setSent({ nome, email });
  }

  function reset() {
    setErrors({});
    setSent(null);
  }

  if (sent) {
    return (
      <div ref={sentRef} role="status" style={{ minHeight: 520, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 18, textAlign: "center", padding: "24px 8px" }}>
        <span className="pop-in" style={{ width: 88, height: 88, borderRadius: 999, background: "#ECFDF3", color: "#067647", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <svg className="ic" width="44" height="44" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2.4 }}>
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
        <h2 ref={sentTitleRef} tabIndex={-1} style={{ fontFamily: FONT_DISPLAY, fontSize: 30, fontWeight: 700, lineHeight: 1.2 }}>
          Recebemos o seu contato
        </h2>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "#475569", maxWidth: 420 }}>
          Obrigado, {sent.nome.split(" ")[0]}. A gente responde em até 24 horas no e-mail {sent.email}.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12, paddingTop: 8 }}>
          <Link className="btn-primary" href={ROUTES.home} style={{ display: "inline-flex", alignItems: "center", height: 52, padding: "0 24px", borderRadius: 14, background: "#2563EB", color: "#FFFFFF", fontSize: 16, fontWeight: 700 }}>
            Voltar para o início
          </Link>
          <button type="button" className="btn-ghost" onClick={reset} style={{ display: "inline-flex", alignItems: "center", height: 52, padding: "0 22px", borderRadius: 14, border: "1.5px solid #BFD4FE", background: "#FFFFFF", color: "#1D4ED8", fontSize: 16, fontWeight: 700 }}>
            Enviar outro contato
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} aria-labelledby="form-t" style={{ display: "flex", flexDirection: "column", gap: 22 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <h2 id="form-t" style={{ fontFamily: FONT_DISPLAY, fontSize: 26, fontWeight: 700, lineHeight: 1.2 }}>
          Pedir uma proposta
        </h2>
        <p style={{ fontSize: 14, color: "#5B6478" }}>Campos com * são obrigatórios.</p>
      </div>

      {hasErrors && (
        <div role="alert" style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "14px 16px", borderRadius: 14, background: "#FEF3F2", color: "#B42318", fontSize: 15, fontWeight: 600 }}>
          <svg className="ic" width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" style={{ marginTop: 1 }}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4" />
            <path d="M12 16h.01" />
          </svg>
          Revise os campos marcados para enviar.
        </div>
      )}

      <div style={gridStyle}>
        <TextField id="f-nome" errorId="e-nome" name="nome" label="Nome completo" type="text" autoComplete="name" error="Informe o seu nome." invalid={errors.nome} />
        <TextField id="f-email" errorId="e-email" name="email" label="E-mail de trabalho" type="email" autoComplete="email" error="Informe um e-mail válido, como nome@empresa.com.br." invalid={errors.email} />
        <TextField
          id="f-cel"
          errorId="e-cel"
          name="celular"
          label="Celular com DDD"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          placeholder="(11) 91234-5678"
          error="Informe o celular com DDD."
          invalid={errors.celular}
        />
        <TextField id="f-emp" errorId="e-emp" name="empresa" label="Empresa" type="text" autoComplete="organization" error="Informe o nome da empresa." invalid={errors.empresa} />
        <div style={fieldStyle}>
          <label htmlFor="f-cnpj" style={labelStyle}>
            CNPJ <span style={optionalStyle}>(opcional)</span>
          </label>
          <input id="f-cnpj" name="cnpj" type="text" inputMode="numeric" placeholder="00.000.000/0000-00" style={inputStyle("#8A94A6")} />
        </div>
        <TextField id="f-cargo" errorId="e-cargo" name="cargo" label="Cargo" type="text" autoComplete="organization-title" error="Informe o seu cargo." invalid={errors.cargo} />
      </div>

      <div style={gridStyle}>
        <SelectField name="pessoas" label="Quantas pessoas vai premiar?" options={PESSOAS} invalid={errors.pessoas} />
        <SelectField name="volume" label="Quanto vai premiar por ano?" options={VOLUME} invalid={errors.volume} />
      </div>

      <fieldset aria-describedby="e-quem" style={{ border: 0, padding: 0, minWidth: 0, display: "flex", flexDirection: "column", gap: 10 }}>
        <legend style={{ padding: 0, marginBottom: 10, fontSize: 14, fontWeight: 700 }}>
          Quem vai receber os prêmios? <Required />
        </legend>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(170px, 100%), 1fr))", gap: 10 }}>
          {QUEM.map((opt) => (
            <label key={opt} className="opt" style={optStyle(borderColor(errors.quem))}>
              <input type="radio" name="quem" value={opt} />
              {opt}
            </label>
          ))}
        </div>
        {errors.quem && (
          <span id="e-quem" style={errorStyle}>
            Escolha uma opção.
          </span>
        )}
      </fieldset>

      <div style={fieldStyle}>
        <label htmlFor="f-msg" style={labelStyle}>
          Como a sua empresa premia hoje? <span style={optionalStyle}>(opcional)</span>
        </label>
        <textarea
          id="f-msg"
          name="mensagem"
          rows={4}
          placeholder="Ex.: premiamos a equipe de vendas todo mês, por meta batida."
          style={{ padding: "12px 14px", borderRadius: 12, border: "1.5px solid #8A94A6", background: "#FFFFFF", fontSize: 16, lineHeight: 1.5, resize: "vertical" }}
        />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <label style={checkLabelStyle}>
          <input type="checkbox" name="privacidade" aria-required="true" aria-invalid={!!errors.privacidade} aria-describedby="e-priv" style={{ marginTop: 2 }} />
          <span>
            Li e concordo com a{" "}
            <a href="#" style={{ fontWeight: 700 }}>
              Política de Privacidade
            </a>
            . <Required />
          </span>
        </label>
        {errors.privacidade && (
          <span id="e-priv" style={{ marginTop: -8, paddingLeft: 30, ...errorStyle }}>
            Para enviar, é preciso concordar com a Política de Privacidade.
          </span>
        )}
        <label style={{ ...checkLabelStyle, color: "#475569" }}>
          <input type="checkbox" name="novidades" style={{ marginTop: 2 }} />
          <span>
            Quero receber novidades da Prize por e-mail e WhatsApp. <span style={{ color: "#5B6478" }}>(opcional)</span>
          </span>
        </label>
      </div>

      <button type="submit" className="btn-primary" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, height: 56, border: 0, borderRadius: 14, background: "#2563EB", color: "#FFFFFF", fontSize: 16, fontWeight: 700 }}>
        Enviar
        <svg className="ic" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" style={{ strokeWidth: 2 }}>
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      </button>
    </form>
  );
}
