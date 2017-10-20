import React, { Component } from 'react';
import siegel from './siegel-s.png';
import star0 from './star-0.png';
import star05 from './star-0.5.png';
import star1 from './star-1.png';
import star15 from './star-1.5.png';
import star2 from './star-2.png';
import star25 from './star-2.5.png';
import star3 from './star-3.png';
import star35 from './star-3.5.png';
import star4 from './star-4.png';
import star45 from './star-4.5.png';
import star5 from './star-5.png';

const defaultStyle = {
  boxSizing: 'border-box',
  padding: '0',
  margin: '0',
  verticalAlign: 'unset',
  backgroundColor: 'white',
  border: 'none',
  color: '#363636',
  fontFamily: 'Arial, sans-serif',
  fontSize: '11px',
  fontWeight: 'normal',
  fontStyle: 'normal',
  textAlign: 'left',
  textShadow: 'none',
  textTransform: 'none',
  textDecoration: 'none',
  lineHeight: '1.1'
}

const appStyles = { ...defaultStyle,
  margin: '-32px 0 5px 0',
  width: '180px',
  border: '1px solid lightGray',
  borderRadius: '6px',
  borderTop: '8px solid #00a4f9',
  boxShadow: '1px 1px 3px lightgrey',
  padding: '8px'
}

const headlineStyle = { ...defaultStyle,
  color: '#00a4f9',
  fontSize: '13px',
  fontWeight: 'bold',
  lineHeight: '1.0',
  textAlign: 'center',
  margin: '11px 0'
}

const siegelStyle = { ...defaultStyle,
  position: 'relative',
  right: '-155px',
  backgroundColor: 'transparent',
  width: '40px'
}

const starSection = { ...defaultStyle,
  padding: '10px 0',
  borderTop: '1px solid lightgrey',
  borderBottom: '1px solid lightgrey',
  margin: '15px 0',
  textAlign: 'center',
  fontSize: '12px'
}

const starsStyle = { ...defaultStyle }

const averageStyle = {
  ...defaultStyle,
  fontSize: '12px',
  fontWeight: 'bold'
}

const orgaStyle = { ...defaultStyle,
  fontWeight: 'bold',
  color: '#00a4f9'
}

const paragraphStyle = { ...defaultStyle,
  textAlign: 'center',
  lineHeight: '1.3',
  margin: '10px 0'
}

const linkStyle = { ...defaultStyle,
  color: '#00a4f9' }

class App extends Component {
  render() {
    const abbreviateDate = (dateString) => {
      let myDate = new Date(dateString)
      return myDate.getMonth() + 1 + '/' + myDate.getFullYear()
    }

    const floatAsWord = (num) => {
      if (num >= 4.5) {
        return 'Hervorragend'
      } else if (num >= 3.5) {
        return 'Sehr gut'
      } else if (num >= 2.5) {
        return 'Gut'
      } else if (num >= 1.5) {
        return 'Befriedigend'
      } else if (num <= 1.4) {
        return 'Eher enttäuschend'
      }
    }

    const floatAsImage = (num) => {
      if (num >= 5)  {
        return star5
      } else if (num >= 4.5) {
        return star45
      } else if (num >= 4.0) {
        return star4
      } else if (num >= 3.5) {
        return star35
      } else if (num >= 3.0) {
        return star3
      } else if (num >= 2.5) {
        return star25
      } else if (num >= 2.0) {
        return star2
      } else if (num >= 1.5) {
        return star15
      } else if (num >= 1.0) {
        return star1
      } else if (num >= 0.5) {
        return star05
      } else if (num >= 0.0) {
        return star0
      }
    }

    return (
      <div style={defaultStyle}>
        <img src={siegel} style={siegelStyle} alt="siegel"/>
        <div style={appStyles}>
          <h2 style={headlineStyle}>Schueleraustausch.net</h2>
          <p style={paragraphStyle}>
            {this.props.num_ratings} Schüler bewerteten&nbsp;
            <a style={orgaStyle}
               href={this.props.url}>{this.props.organisation}</a>
          </p>
          <div style={starSection}>
            <img src={floatAsImage(this.props.average)} style={starsStyle} alt='bewertung' /><br />
            <strong style={averageStyle}>{floatAsWord(this.props.average)} ({this.props.average.toFixed(1)}/5)</strong>
          </div>
          <p style={paragraphStyle}>
            Stand: {abbreviateDate(this.props.updated_at)}<br />
            Aktuelle Schülerbewertungen auf<br />
            <a style={linkStyle}
               href='https://www.schueleraustausch.net'
               alt='Bewertungen auf Schueleraustausch.net'>www.schueleraustausch.net</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
