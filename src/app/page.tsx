import Link from "next/link";


export default function PageHome() {
 

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
  
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          <Link href ={'/auth/register'}>  Registrar</Link>
        </h2>

    </div>
  );
}

