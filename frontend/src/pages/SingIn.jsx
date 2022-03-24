import '../styles/signin.css';

function SignIn() {

  return (
    <main class="form-signin">
      <form>
          <h1 className="signin-title">Spring Security</h1>
          <div class="form-floating">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
            <label for="floatingInput">E-mail</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Senha</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Lembrar-me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
      </form>
    </main>
  );
}

export default SignIn;