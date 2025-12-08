import styled from "styled-components";

/* color palette */
const t = {
  bg: "#ffffff",
  surface: "#f8f8f8",
  border: "#d9d9df",
  text: "#1c1c1c",
  sub: "#6b7280",
  primary: "#dc2626",
  primaryHover: "#c81e1e",
  blue: "#2563eb",
  shadow: "0 2px 12px rgba(16, 24, 40, 0.06)",
  radius: "10px",
};

/* main layout */
export const Page = styled.div`
  min-height: 100vh;
  background: ${t.bg};
  display: flex;
  justify-content: center;
  padding: 48px 16px 80px;
  font-family: 'Work Sans', sans-serif;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 860px;
  background: #fff;
  border: 1px solid #e6e6eb;
  border-radius: 8px;
  box-shadow: ${t.shadow};
  padding: 24px 28px 32px;
`;

/* headings */
export const HeadingWrap = styled.div`
  text-align: center;
  margin-bottom: 14px;
`;

export const HeadingTop = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: ${t.blue};
`;

export const HeadingBrand = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${t.text};
`;

export const HeadingBrandAccent = styled.span`
  color: ${t.primary};
  font-weight: 800;
`;

/* grid layout */
export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px 16px;

  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: ${t.text};
  margin-bottom: 6px;
`;

export const Input = styled.input`
  width: 100%;
  height: 38px;
  border: 1px solid ${t.border};
  border-radius: ${t.radius};
  padding: 8px 12px;
  font-size: 14px;
  color: ${t.text};
  outline: none;

  &:focus {
    border-color: #94a3b8;
    box-shadow: 0 0 0 3px rgba(148, 163, 184, .15);
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 38px;
  border: 1px solid ${t.border};
  border-radius: ${t.radius};
  padding: 0 12px;
  font-size: 14px;
  color: ${t.text};
  outline: none;
`;

export const Inline = styled.div`
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 8px;
`;

export const CountryCode = styled(Select)``;

export const PasswordWrap = styled.div`
  position: relative;

  ${Input} {
    padding-right: 70px;
  }
`;

export const ShowHideBtn = styled.button`
  position: absolute;
  right: 8px;
  top: 6px;
  height: 26px;
  padding: 0 10px;
  border: 1px solid ${t.border};
  background: #fff;
  font-size: 12px;
  font-weight: 600;
  color: ${t.text};
  border-radius: 6px;
  cursor: pointer;
`;

export const RuleList = styled.div`
  margin-top: 10px;
  padding-left: 6px;
`;

export const HelperRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px 16px;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const RuleItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${({ $ok }) => ($ok ? "#0a8043" : t.sub)};
`;

export const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ $ok }) => ($ok ? "#0a8043" : "#cbd5e1")};
`;

export const Actions = styled.div`
  margin-top: 16px;
`;

export const SubmitBtn = styled.button`
  background: ${t.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  font-weight: 700;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background: ${t.primaryHover};
  }
`;

export const FooterNote = styled.div`
  margin-top: 14px;
  font-size: 14px;
  color: ${t.sub};
`;

export const LinkLike = styled.a`
  color: ${t.blue};
  text-decoration: none;
  font-weight: 700;
  margin-left: 6px;

  &:hover {
    text-decoration: underline;
  }
`;
