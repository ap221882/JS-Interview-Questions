const compose = (...fns) => x => fns.reduceRight((prev, fn)=>fn(prev),x )

const f = compose(x=>x*2, x=>x/3)

console.log(f(4))

f(4)
