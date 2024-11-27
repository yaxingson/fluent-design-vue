import { defineComponent, h } from 'vue'
import type { App } from 'vue'

type ButtonProps = {
  icon:unknown
  as:'a'|'button'
  disabled:boolean
  appearance:'subtle'|'primary'|'outline'|'secondary'|'transparent'
  iconPosition:'before'|'after'
  shape:'circular'|'square'|'rounded'
  size:'small'|'medium'|'large'
  loading:boolean
}

const Button = defineComponent<ButtonProps>({
	setup(props, ctx) {
		return ()=>h('button', {}, ctx.slots)
	}
})

Button.install = (app:App)=>{
	app.component('fl-button', Button)
}

export default Button
