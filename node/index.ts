import bluebird from 'bluebird-global'

import { hanamaru } from './test'

const foo = (bla: string) => { console.log(bla + 2) }
foo('234')
const bla = hanamaru()
foo(bla)

let zu: number = 0
let ra: number = 1

const mirai = (ctx: any) => {
  console.log(`Mirai zura!!!! ${zu}`)
  const zura = ra
  ra = zu + ra
  zu = zura

  ctx.body = `${zura}`
  ctx.status = 200
}

export default { 
  routes: {
    mirai,
  }
}
