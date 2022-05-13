import { Button } from "components/Button";
import { Input } from "components/Input";
import { Section } from "./styles";

export function ChangePassword() {
  return (
    <Section>
      <div className="profile-info-items mb-4">
        <div className="profile-header">
          <h2>Password</h2>
        </div>
        <form>
          <div className="form-group mb-4">
            <label className="form-label">Password actual</label>
            <Input type="password" isPassword
              placeholder="8+ caracteres necessários" name="password" required />
          </div>

          <div className="form-group mb-4">
            <label className="form-label">Nova password</label>
            <Input type="password" isPassword
              placeholder="8+ caracteres necessários" name="password" required />
          </div>

          <div className="form-group mb-4">
            <label className="form-label">Confirmar password</label>
            <Input type="password" isPassword
              placeholder="8+ caracteres necessários" name="password" required />
          </div>



          <div className="form-group mb-4 col-lg-6">
            <Button>Actualizar</Button>
          </div>

        </form>
      </div>
    </Section>
  )
}