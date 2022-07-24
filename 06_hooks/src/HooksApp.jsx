import { CustomHook } from "./01_use_state/CustomHook"
import { Use_state_component } from "./01_use_state/Use_state_component"
import { FormularioSimple } from "./02_use_effect/FormularioSimple"
import { FormularioConCustomHook } from "./02_use_effect/FormularioConCustomHook"
import { MultipleCustomHook } from "./03_examples/MultipleCustomHook"
import { FocusScreen } from "./05_useRef/FocusScreen"
import { Layout } from "./06_useLayoutEffect/Layout"
import { Memorize } from "./07_memo/Memorize"
import { MemoHook } from "./07_memo/MemoHook"

export const HooksApp = () => {
  return (
    <>
      {/* <div>hooksApp</div> */}
      {/* <Use_state_component/> */}
      {/* <CustomHook/> */}
      {/* <FormularioConCustomHook/> */}
      {/* <MultipleCustomHook/> */}
      {/* <FocusScreen /> */}
      {/* <Layout /> */}
      {/* <Memorize /> */}
      <MemoHook />
    </>
  )
}
