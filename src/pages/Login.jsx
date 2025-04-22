import { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const codesRef = collection(db, 'admin_access_code')
      const snapshot = await getDocs(codesRef)
      const validCodes = snapshot.docs.map(doc => doc.data().code)

      if (validCodes.includes(code.trim())) {
        localStorage.setItem('access_code', code) 
        navigate('/dashboard')
      } else {
        setError('Invalid access code')
      }
    } catch (err) {
      console.error('Login error:', err)
      setError('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-screen bg-gray-900">
      <form onSubmit={handleLogin} className="bg-white p-5 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}
        <input
          type="text"
          placeholder="Enter Access Code"
          className="w-full px-3 py-2 border rounded mb-4"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  )
}
