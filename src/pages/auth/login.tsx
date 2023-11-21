import Cookies from 'js-cookie'

const Login = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: '#0E121B',
          fontSize: '28px',
          fontWeight: '700',
        }}
      >
        Авторизация
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
      </div>
    </>
  )
}

export default Login
