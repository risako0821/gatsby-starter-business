import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
　　　　　<p><a href='marginrate.pdf'>労働者派遣事業におけるマージン率の公開</a></p>
          <p>
            {config.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
