export default function RegisterForm() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-6">Registro</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-3 w-full rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Tu nombre"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-3 w-full rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="tucorreo@email.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-3 w-full rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
}
