import React from 'react'
import 'boxicons/css/boxicons.min.css';
import "./footer.css";
 
export default function Footer() {
  return (
    <div>
      <footer>
        <div className="footer">
          <p>© 2024 E-Commerce Store. All rights reserved. Designed and developed by Raveeha Mohsin.</p>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/raveehamohsin/" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="https://github.com/RaveehaMohsin" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-github'></i>
            </a>
            <a href="https://www.facebook.com/raveeha.mohsin/" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-facebook'></i>
            </a>
            <a href="https://www.instagram.com/raveeha_here?igsh=cHZhZDB5YWdkMnNq" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-instagram'></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
