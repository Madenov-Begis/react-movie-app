import Cookies from 'js-cookie'
import { LoginForm } from '../../features/auth/ui/login-form'
import { AuthService } from '../../features/auth/service/auth-service'

const Login = () => {
  const getReqToken = async () => {
    try {
      const { data } = await AuthService.getReqToken()

      if (data.success == true) {
        Cookies.set('reqToken', data.request_token, {
          expires: 1 / 24,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      {/* <div>
        <button onClick={getReqToken}>Get request token</button>
      </div>
      <div>
        <button>
          <a
            href={`https://www.themoviedb.org/authenticate/${Cookies.get(
              'reqToken'
            )}?redirect_to=http://localhost:5173/login`}
          >
            Confirm
          </a>
        </button>
      </div> */}
      <LoginForm />
    </>
  )
}

export default Login
