## Clase 45 getStaticProps

- getStaticProps Es una función que se ejecuta unicamente en el lado del servidory solo se ejecuta en build time
- Solo se puede ejecutar en pages

# Clase 54 getStaticPaths
- Si la página tiene rutas dinamicas y usa `getStaticProps`, se necesita definir una lista de paths para ser generados estaticamente

# Clase 55 getStaticPaths cominicar con getStaticProps
- En server side despues de ejecutarse `getStaticPaths` pasan los parametros a `getStaticProps` se leen los argumentos desde el contexto