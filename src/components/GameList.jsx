import React from 'react'
import Cards from './Cards'

const GameList = ({gamesList,setshow,setselected}) => {
  return (
    <div>
        <div className='heading'>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAcdJREFUSEvFlo1NAzEMhe1JoJNAN6GTAJPQTkI3oUxi+k525PPl5xwJNRK6gzZ8tvP8HKYHLX4Ql6bBIvKGoJn5PBP8FFhEXonoW4FHZr5m4bNgQAHHujLz8d/BIVvjpbNOZywiX0S0nK9bZ2Y+ZbKeAYsCIKpnLfmNiJA1nrtWCiwiH0T0bqLSp4kslXUWbNkWQYmICe3GzIdd6aIN/RdVOKbWJ/0M5bSfjZiC2KzUeNr7r737ni9gNQQIZ7RWmYkIgsI+C7i3/2RwD/amgM3V6JkZ57xaCsf+F1clvMZgStvFUnvxAIwI064EYqWCq17fiCtsmIIH9SOOjcFUVV2BX2olrh2mU7kdV7VqzXaaybwCbZpKt48DfDgM5F5jrcLwu0MDcf+s60yq7B+z05F3ZzIuPdhq1IyLZcAHGwLqVmY2RTzRy3utOAKXEch3WWt/+l635D+h+lDu5W+t6ozAODNYIkbgRa0Rv9fW0vM6veBYXYGNwEWlwf7gZjb4o08jAATXnVZ7+9hnuClhxak2UyyWqAeOV5wly9YtozGlmi3YA/ubZFcoYaZ78U2B7T4Fkey+S6nyl729y/7QuUa3gtnPHwb+AxSV9x+kDNwUAAAAAElFTkSuQmCC"/>
        <h2>Best Games</h2>
      </div>
      <div className='list'>
        {gamesList.filter(el=>el.type==="highrate").map(el=><Cards setselected={setselected} setshow={setshow} el={el}/>)}
      </div>
      <div className='heading'>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXFJREFUSEvFlutRAzEMhLWdJJ2QSkgqCVRCqIRQCelEYWfOGc+hh2Uyc/57Pn2Wdy0JstHCRlyZBqvqDsBt9uBTYFU9isiHiBD8CeCteoAyWFUJJLhf71V4CayqXyLy4mR3BXAYzXwYnEAb7wZgPwIfAg9CG+8C4JTBU7Cq0jjnLFBV8xCsqtSTulYX3X4CcPV+zMCRmbLDhHq74O6tZoDoO7O+WBsi8I+I7P5DZYHxXG6Cn5RtO/PB0toDW9VpNnnzeXngEVOxStG93BtJYlY0D5zp+7g+dikR4X5vmTp7YA0C/WkI2XvHbwdZx6tetetSp2uRV8rY09h0KKMHV14yl1Wf07bnNJMS2DKMW4Wafo7We2tEiirX+i2bAXrTGNfttsgIzKwfb9Ry5tqpK/Bck+gM0+Bpxss/fIosLDSiO4WODALMnIPAt9dpOo05BL4uvTgcfVNwb5yosS/ZHrPDtXjD4NkOMTWBPBvWx9ss4zt0a7QfNKd4iwAAAABJRU5ErkJggg=="/>
        <h2>trending</h2>
      </div>
      
      <div className='list'>
        {gamesList.filter(el=>el.type==="trending").map(el=><Cards setselected={setselected} setshow={setshow} el={el}/>)} 
      </div>
      <div className='heading'>
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAhZJREFUSEvFVstNQ0EMHBfAjQIIVy4cuZE0QAuQRvhUQigBGiBw45YOSAHcKMAwT7vIz2+/T0JZKXqRdtdjj8deCw605EC46AZW1RMASwD87sMPIrLtCaIJOIDdALgrGKcTT78ObUSE/4urCNwI6AEIuhWRdQk5CxxAXwOl0QbpfAuGt+EM90j9dfjGs3RglYs+CRwMfhqPaWRdy2O4x3QwLVzZezlgRsoouB5E5N7SpqpXAM4BvIjIzlOqqjwf9bAXkYU/MwFW1UfjcQ70ORj6BnAqIl8VcApulPMRsKoySkY70JTyVFVvyYIBWooI8z5aTiMTyj2wjZbCmNSmqpLidwBHAD5E5KISbdxeWKF5YAqKjWFCjcvxMYAzH2lgjM7Thq0ECnNU23/AjuZJbn1UzhECETAKsqhoblpglgAvc9HDTQmMe5kGM3QwXwlZVauqBR7lI+eAqtqy47FmpmzEtvbmAM/r1S7HSUVnSsY/Ht1U2xpupszkOiUu2klqxVJNZcb+zNdlVRNXgoEYvS2n5GPh6ziKpelRSDlWUProkfHANupky2xlIfGs5jtXyJdtm8UOVmkqtkommkm9Tow6DgBNCq306qRe/mMQsOruGwRMidjRJ06U/A7jj4mUpXhp3vHYq/tGn2hw5rDH61Vt9Iy3dpZK6Wpey2wpk8AAxRcbBL+knKVXnaUtRlPELU71njkY8A+eCRouN21J9wAAAABJRU5ErkJggg=="/>
        <h2>New Games</h2>
      </div>
      
      <div className='list'>
        {gamesList.filter(el=>el.type==="newgames").map(el=><Cards setselected={setselected} setshow={setshow} el={el}/>)} 
      </div>
      
    </div>
  )
}

export default GameList