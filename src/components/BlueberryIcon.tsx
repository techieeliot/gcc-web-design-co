import React from 'react'

interface BlueberryIconProps {
  className?: string
}

const BlueberryIcon: React.FC<BlueberryIconProps> = ({ className }) => {
  return (
    <div
      className={`text-9xl order-1 lg:order-2 flex items-center justify-center ${className}`}
    >
      🫐
    </div>
  )
}

export default BlueberryIcon
