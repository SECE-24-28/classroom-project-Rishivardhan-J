import React, { useMemo, useState } from "react";
import {
  Page,
  Card,
  HeadingWrap,
  HeadingTop,
  HeadingBrand,
  HeadingBrandAccent,
  FormGrid,
  Field,
  Label,
  Input,
  Select,
  Inline,
  CountryCode,
  HelperRow,
  Dot,
  Actions,
  SubmitBtn,
  FooterNote,
  LinkLike,
  PasswordWrap,
  ShowHideBtn,
  RuleList,
  RuleItem,
} from "./signup.styles";

const passoutYears = Array.from({ length: 10 }, (_, i) => 2020 + i);
const colleges = ["AGH B2C", "AGH A Campus", "AGH City"];
const depts = ["CSE", "ECE", "EEE", "MECH", "CIVIL"];
const levels = ["UG", "PG"];
const countries = ["IND", "USA", "UK"];

const Signup = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    college: colleges[0],
    passout: passoutYears[4],
    dept: depts[0],
    level: levels[0],
    email: "",
    country: "IND",
    mobile: "",
    password: "",
    confirm: "",
  });

  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const rules = useMemo(() => {
    const v = form.password;
    return {
      len: v.length >= 8,
      lower: /[a-z]/.test(v),
      upper: /[A-Z]/.test(v),
      number: /\d/.test(v),
      special: /[^a-zA-Z0-9]/.test(v),
    };
  }, [form.password]);

  const onChange = (key) => (e) =>
    setForm((p) => ({ ...p, [key]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted (Demo)");
  };

  return (
    <Page>
      <Card as="form" onSubmit={onSubmit}>
        <HeadingWrap>
          <HeadingTop>Welcome to</HeadingTop>
          <HeadingBrand>
            Aptitude Guru Hem <HeadingBrandAccent>LMS</HeadingBrandAccent>
          </HeadingBrand>
        </HeadingWrap>

        <FormGrid>
          <Field>
            <Label>First Name</Label>
            <Input
              placeholder="Enter first name"
              value={form.firstName}
              onChange={onChange("firstName")}
            />
          </Field>

          <Field>
            <Label>Last Name</Label>
            <Input
              placeholder="Enter last name"
              value={form.lastName}
              onChange={onChange("lastName")}
            />
          </Field>

          <Field>
            <Label>Select College</Label>
            <Select value={form.college} onChange={onChange("college")}>
              {colleges.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </Field>

          <Field>
            <Label>Select Passout Year</Label>
            <Select value={form.passout} onChange={onChange("passout")}>
              {passoutYears.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </Select>
          </Field>

          <Field>
            <Label>Department</Label>
            <Select value={form.dept} onChange={onChange("dept")}>
              {depts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </Select>
          </Field>

          <Field>
            <Label>UG or PG</Label>
            <Select value={form.level} onChange={onChange("level")}>
              {levels.map((l) => (
                <option key={l} value={l}>
                  {l}
                </option>
              ))}
            </Select>
          </Field>

          <Field>
            <Label>Email</Label>
            <Input
              type="email"
              placeholder="Enter email address"
              value={form.email}
              onChange={onChange("email")}
            />
          </Field>

          <Field>
            <Label>Mobile</Label>
            <Inline>
              <CountryCode value={form.country} onChange={onChange("country")}>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </CountryCode>
              <Input
                placeholder="Enter mobile number"
                value={form.mobile}
                onChange={onChange("mobile")}
              />
            </Inline>
          </Field>

          <Field>
            <Label>Password</Label>
            <PasswordWrap>
              <Input
                type={showPwd ? "text" : "password"}
                placeholder="Enter the password"
                value={form.password}
                onChange={onChange("password")}
              />
              <ShowHideBtn
                type="button"
                onClick={() => setShowPwd((s) => !s)}
              >
                {showPwd ? "Hide" : "Show"}
              </ShowHideBtn>
            </PasswordWrap>

            <RuleList>
              <RuleItem $ok={rules.len}>
                <Dot $ok={rules.len} /> minimum 8 characters
              </RuleItem>
              <HelperRow>
                <RuleItem $ok={rules.lower}>
                  <Dot $ok={rules.lower} /> one lowercase character
                </RuleItem>
                <RuleItem $ok={rules.upper}>
                  <Dot $ok={rules.upper} /> one uppercase character
                </RuleItem>
              </HelperRow>
              <HelperRow>
                <RuleItem $ok={rules.special}>
                  <Dot $ok={rules.special} /> one special character
                </RuleItem>
                <RuleItem $ok={rules.number}>
                  <Dot $ok={rules.number} /> one number
                </RuleItem>
              </HelperRow>
            </RuleList>
          </Field>

          <Field>
            <Label>Confirm Password</Label>
            <PasswordWrap>
              <Input
                type={showConfirm ? "text" : "password"}
                placeholder="Enter the confirm password"
                value={form.confirm}
                onChange={onChange("confirm")}
              />
              <ShowHideBtn
                type="button"
                onClick={() => setShowConfirm((s) => !s)}
              >
                {showConfirm ? "Hide" : "Show"}
              </ShowHideBtn>
            </PasswordWrap>
          </Field>
        </FormGrid>

        <Actions>
          <SubmitBtn type="submit">Submit</SubmitBtn>
        </Actions>

        <FooterNote>
          Already have an account? Go to{" "}
          <LinkLike href="#">Log In</LinkLike>
        </FooterNote>
      </Card>
    </Page>
  );
};

export default Signup; // ✅ This fixes your error
