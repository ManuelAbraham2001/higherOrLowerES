import { useEffect, useState } from 'react';
import Test from './Test';
import Card from './Card';
import Card2 from './Card2';
import ReactDOM from 'react-dom/client';

const CardsContainer = () => {

    const root = ReactDOM.createRoot(document.getElementById('root'));

    const [change, setChange] = useState(false)
    const [youtuber1, setYoutuber1] = useState('')
    const [youtuber2, setYoutuber2] = useState('')
    const [correctCount, setCorrectCount] = useState(0)
    const [cardActive, setCardActive] = useState(false)

    const youtubers = [
        'UCgTOIiEgjm58xLjHvDjmgdA', 'UCJUYcEdvnYFGajHBW0Nao3w', 'UCmS75G-98QihSusY7NfCZtw', 'UCIE8ukN4SHMuWc3TtmT4suQ', 'UCrK1cscHiI3tRK_0cwszSuw', 'UCaC1Fn7laGucT1y6Y-1C5yA', 'UCpNw4T60BlOSUJltOrIn8YA', 'UCSunSIhBSrgzYzx2Yd5Rxaw', 'UCv5XgD7uiSJstuqxbFOIOYw', 'UCemBPOt0FZgLBeu0iQWcj-Q', 'UC1VK6Ro1cvOX8J7UKgnyztA', 'UCUPo6rpxItiqyLLBu9EBB_Q', 'UCfurPtvn7AE3mGltAevzdKQ', 'UC4DLCrt55UwaDvAswIr_59A', 'UCryj5stGf6fqoawRCM8ho1g', 'UCAA0H85JKCAYkRPYZi2vXow', 'UCZs0WwC0Dn_noiQE2BHSTKg', ' UCXazgXDIYyWH-yXLAkcrFxw', 'UCam8T03EOFBsNdR0thrFHdQ', 'UCqJ5zFEED1hWs0KNQCQuYdQ', 'UCyQqzYXQBUWgBTn4pw_fFSQ', 'UCUY6t_N9MyEWu6I0ZXkbtKA', 'UC4LHNX8d8RqnDX0OezgmCTg', 'UCI2FmVp--YL8d7iVFt8mmxg', 'UCCEmjNPpJYhGDgaEqeeA4HA', 'UChOQkbLHWi3zSCUjT7Kjd1g', 'UC8rNKrqBxJqL9izOOMxBJtw', 'UC_W0_Nv-3rxpWVvosddhrPw', 'UCevY-z55kr37ZAXG15F-KiA', 'UCKmlxQVs0vHtaLldRIQ8lsA', 'UCFR2oaNj02WnXkOgLH0iqOA', 'UCKR6KdJmTdhLVQJnoJu9tRQ', 'UCHicabXz9rUMWLcdMqBtbxQ', 'UCHIwQiZhIn6fm5b_IilqBbQ', 'UCp7wTrsCU7eICb5z69D3rwA', 'UCcjIvuxmWlS5IEQ0JdPV4Ng', 'UCoTyVfIkM-hjz4JauDoVvog', 'UCHkh8YFg0l4tkY6_zvzdd5w', 'UCDZsyOkn-WTiTwgAvZSQ_cg', 'UCCw5Xsx3WazdczGTKJdjwPQ', 'UC4Tklxku1yPcRIH0VVCKoeA', 'UCH3h4jRKn3lJo0uORqqESPg', 'UCgRr2pZaGeaZVN6LfbvQk9w', 'UCXW9I3tejb37PGHyHcQc6hA', 'UCQFZLyU7ndDUk4epI-7QqXw', 'UCE3qZH8ltYwmQDmm5uinPXw', 'UCsmx517WjzoyFuC17DGVt1A', 'UCQt9awGIFZeldFsATZNeJag', 'UCaY_-ksFSQtTGk0y1HA_3YQ', 'UCh715KhLM7vbOwozSXLWI_w', 'UCCm3xDalujG8RHrhdTAZlgg', 'UCxthdekpMin2DTv4i-3AjDg', 'UCBxS7NaGh7__pEbv898gKvw', 'UCi7TVXyvrIwqeS9tfYD8UDA', 'UCRTOI5zhwFU-1eooSzgHAHw', 'UC7QiWlK7a7RePg3krLeBK0w', 'UCFOSg71CRAJ58IPuV_-jMbw', 'UCGBNfqYHrq0BcVa9Co0ogsA', 'UCwuqQHp6LYTDIxlyaDkg6Mw', 'UCl8bYBm0XAP23mReE11IBOA', 'UCl53rJuQXLr_qcVOcGDCMjw', 'UC3MkSLMRz4KzhsjPUtBtPdg', 'UCtdyg85rwF9bPlz3ON6izFw', 'UCazcTV-hRc4b-wdb0sFsRKQ', 'UC9MlhVnLZ9DuazKD81Rjudw', 'UCP4shyHDsJv-n_5T1QdcybA', 'UCnmlCrWnJZ-YdDFcVKOnjhA', 'UCanCMSBvZLmv4B6XN73BTEQ', 'UCd6xjtAsyhN6HfSw6lUSVMA', 'UCVoKxxQdeckWgU6DQGZCoIw', 'UCTXfzVSBZX2tnkbLf7ZU7rA', 'UCvQwfdlOR55OO82gFWJCnWQ', 'UC1StC0C68OdfjB9qyJPUF8A','UC5uFttEUB_fNnJqBly_jRXQ', 'UCcfUAgCv_13Y7FyMCQ4rPYw', 'UCf3L_9odIRo9G2L_-hsb7lg', 'UCD5dXej6wC856yigcC-HpeA', 'UCSmTKsZ0FfIND325ICTbxSA', 'UCdBQfHieMWDWxoCeu1de5RA', 'UCvGiJYBPgVP7W1ypE3DKOqA', 'UCc6ijhSlqKeUiyTmb996Rtg', 'UCHgleR62IO4SCuDaOLZ4njw', 'UCbiqjDZeuczOizyzJ4Sp8fQ', 'UCU4dLZPpj0hRF-P4x4snO9g', 'UCWSuUgXtU4wgg_L7mE0_0lQ', 'UCvAdWQikZSiykT99dqJ0Qxw', 'UCnm1ctk8ujjQlenfI0trHWw', 'UCvbTYgbzLcCginSC03fhmwg', 'UCB5POybzno8F7lwLEr_C8og',
        'UCB5POybzno8F7lwLEr_C8og', 'UCXN1Ap4A1bOfNX3O4tIY_gQ', 'UCYWOjHweP2V-8kGKmmAmQJQ', 'UCECJDeK0MNapZbpaOzxrUPA', 'UCQZfFRohQ7UX-0CdXl-6pwQ', 'UCbrd1vu4_7qIE6IPV_dA-OA', 'UCs8qka8tfhdc69wzXYdtZ3A', 'UCBNs31xysxpAGMheg8OrngA', 'UCzoUWqjCbcfWFdOMvoep8FA', 'UCNAhW2oJvy_FUU082pEDspA', 'UCKyU-wd-KY4PMOcOpPQgQcw', 'UCHDeuavvkVwDyJgRFVfbpXA', 'UCzVIrPfZBE-XkBISBybMBLA', 'UCfRgJADdLXwrcjIuTxn_u3Q', 'UCq_oSgHK9lk6NUUgkhUOPnw', 'UCo4ywJQXfUIB0lCBpczW3cA', 'UCY8LnVxm0Hf7DKPKuLPxb2g', 'UC_OLtzRJdg0MJfiqGWAAIHw', 'UCNbwP-bKUlKrE_5qDwvFILQ', 'UCGRtuAmEObNSmlOLDWzZfVg', 'UCsCQIvK0LGpb3dBRo2RXAfA', 'UClnKzwo9CPkYix6V9jK4JTQ', 'UCoQm-PeHC-cbJclKJYJ8LzA', 'UCGs30k8MveMERD3askAgNYA', 'UC0YFjwJc3b1otDerdv6CfWA', 'UCmyIMuo8zRYgLshDff0vLuw', 'UCkjjH0hsvaeRIuwGlM9oSvg', 'UCdPyv-GXDxlOeonqYKtKMSQ', 'UCQ8TuCvcDMepleXFyOQfyOQ', 'UCY62oxtmOKk5-JLJOXBMWnA', 'UCXH1p4gixwXwrUGSx-WvLNQ', 'UC0n5Ihqix8mEqGsjygiJk6Q', 'UCunw-c0EKIX5LpPo8GpA2Aw', 'UCe7VVljK2G15Bdxfr-xQoMw', 'UCUjrDJokSX8JavRwy5iUOkA', 'UCUo7T81zvCqpPhfsPb_kajA', 'UCXnBB3IuuXAH2kDr69-632A', 'UCY_37NEvihrX3Te637OTxOg', 'UCUl-2o1dLbH_GCoU_B_1tsg', 'UC2IDkGu61j_mwNJOc54Sb5w', 'UCG8xW9RS7d_6AQigNkHPkSA', 'UCoOLEikViiW-rUdmTn2d_uA', 'UCwJrDbRJBGvIdYrpBMNtCIg', 'UC2APpwfAlZU8X0EezmhuXUQ', 'UC4Ge3cqrdyOszmnJTcMICcg', 'UCExB-_VCdrh90gIVSxJmpRg', 'UCSahY6dNgVipVxeVF-QIW_w', 'UCt3-Ge4aevIeHYTIOUdpvJQ', 'UCYTPYsuIRSu7o9xmeB_L4_g', 'UCrY307dziCjW1E6u1ZuLetg', 'UCvFmBpXFbwruiWdnGobw9Ow', 'UCdzcHYFrj4JjaBVmagCdoxg', 'UCLBrzsFRM-PgnLgAaxOLRFA', 'UCkD89TEFWsTZluY6tk84yqg', 'UCkDF5-NG0jlPwt0PTzgBM2A', 'UC6awBq3lKY35T__puHY2OYQ', 'UCSM3FVwdCIJfU0OdjKZb94A', 'UCjmHiHCOYEUNMdJujiBQOqQ', 'UCgDeSlu4pNSRrv87ScB0VaQ', 'UCDIR_PyWFrNXfzbG0pPHdIQ', 'UCPx9eXszFK8rkivV7tXZpHA', 'UCQ50aIYbavhpfVc9PKU9qrg', 'UCHrHJ9PDhruY9XF5WXJ4a7g', 'UCAB3buuWw0yMx9ca_rWwQiA', 'UCCmXcYtA4T9wxc3vmbGFxRA', 'UCicv75Se8iS6otnQJ_4Pa_A', 'UC8GRXKNv9CyIq3T3xsYmEcg', 'UCwm_7WWX8mQ1kjSRzAnD0iQ', 'UCNYW2vfGrUE6R5mIJYzkRyQ', 'UCG8eSYvOQUpb9HM8zU5d6xg', 'UC-cnbLlplnXA4oc7rR21qzg', 'UCJusEPcWIH9EyYSCqGP-1ew', 'UCw7Bz6EHxlnOoBUBlJZCWCw', 'UCmWPqUFtuWO7DrSgdlUzT3w', 'UCR8xLrhLmZoMirYnjj4zEWg', 'UCExVswmCLmkkoBkjBp3Ta9Q'
    ]

    let yt1 = youtubers[Math.floor(Math.random() * youtubers.length)];
    let yt2 = youtubers[Math.floor(Math.random() * youtubers.length)];
    
    let nombre = ''
    let suscriptores = ''
    let imagen = ''

    let newYtber = {}

    let userInfo = async (setYoutuber, ytber) =>{
        try {
            let res = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${ytber}&key=${process.env.REACT_APP_API_KEY}`)
            let data = await res.json()
    
            let respuesta = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${ytber}&key=${process.env.REACT_APP_API_KEY}`)
            let datos = await respuesta.json()
    
            nombre = data["items"][0].snippet.title
            suscriptores = parseInt(datos["items"][0].statistics.subscriberCount)
            imagen = data["items"][0].snippet.thumbnails.medium.url
        } catch (error) {
            console.log('no se pudo cargar la img', error)
        }

        newYtber = {
            nombre: nombre,
            suscriptores: suscriptores,
            imagen: imagen
        }
        
        setYoutuber(newYtber)
    }

    useEffect(() => {
        setCardActive(false)
        setChange(false)
        
        userInfo(setYoutuber1, yt1)
        userInfo(setYoutuber2, yt2)   
    }, [])

    let correct = () => {
        setChange(true)
        setTimeout(function(){
            setCardActive(true)
        }, 2000);
        
        yt2 = youtubers[Math.floor(Math.random() * youtubers.length)];
        setTimeout(function(){
            setCorrectCount(correctCount + 1)
            setYoutuber1(youtuber2)
            setCardActive(false)
            userInfo(setYoutuber2, yt2)
            setChange(false)
        }, 5000);
    }

    let incorrect = () => {
        setChange(true)
        setTimeout(function(){
            setCorrectCount(0)
            root.render(<Test></Test>)
        }, 3000);
    }
    
    let more = () => {
        if (youtuber2.suscriptores >= youtuber1.suscriptores) {
            correct()
        } else {
            incorrect()
            return
        }
    }

    let less = () => {
        if (youtuber2.suscriptores <= youtuber1.suscriptores) {
            correct()
        } else {
            incorrect()
            return
        }
    }

  return (
    <div className="card_container">
    <Card name={youtuber1.nombre} suscribers={youtuber1.suscriptores} pp={youtuber1.imagen} cardActive={cardActive}></Card>
    <h1>VS</h1>
    <h2>{correctCount}</h2>
    <Card2 name={youtuber2.nombre} suscribers={youtuber2.suscriptores} more={more} less={less} pp={youtuber2.imagen} conditionRender={change} cardActive={cardActive}></Card2>
    </div>
  )
}

export default CardsContainer