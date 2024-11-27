export default function() {
	return (componentName:string)=>{
		if(componentName.startsWith('fl')) {
			return {
				name:componentName.slice(2),
				from:'fluent-design-vue'
			}
		}
	}
}
