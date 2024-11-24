import { MiPrimerComponente } from './components/miPrimerComponente/MiPrimerComponente'
import { ComponentCounter } from './components/ComponentCounter/ComponentCounter'
import { ComponentUseEffect } from './components/ComponentUseEffect/ComponentUseEffect'
import { FormComponent } from './components/FormComponent/FormComponent'
import { AppProduct } from './components/AppProduct/AppProduct'

export const App = () => {



    return (
        <>
        {/* <div style={{display:"flex", flexDirection:"column", gap:"2vh"}}></div>
            <MiPrimerComponente text={"texto desde propiedades"} color='red' fontSize={(5)}/>
            <ComponentCounter /> 
            <ComponentUseEffect /> */}
            {/* <FormComponent /> */}

            <AppProduct/>
        </>
    )
}
