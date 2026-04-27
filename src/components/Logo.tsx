import logoImage from '../assets/Group 9.jpg'

export function Logo() {
  return (
    <img 
      src={logoImage} 
      alt="Logo" 
      className="w-full h-full object-cover"
    />
  )
}
