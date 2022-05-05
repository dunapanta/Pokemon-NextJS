## Clase 45 getStaticProps

- getStaticProps Es una función que se ejecuta unicamente en el lado del servidory solo se ejecuta en build time
- Solo se puede ejecutar en pages

# Clase 54 getStaticPaths
- Si la página tiene rutas dinamicas y usa `getStaticProps`, se necesita definir una lista de paths para ser generados estaticamente

# Clase 55 getStaticPaths cominicar con getStaticProps
- En server side despues de ejecutarse `getStaticPaths` pasan los parametros a `getStaticProps` se leen los argumentos desde el contexto

# Clase 62 localStorage
- Generar error si se quiere acceder al localStorsge fuera de un useEfect por que el servidor no tiene acceso a el y genera error 500

# 73 Open graph Meta Tags
- https://ahrefs.com/blog/open-graph-meta-tags/
- Agregando meta tags
```
<meta property="og:title" content="How to Become an SEO Expert (8 Steps)" />
<meta property="og:description" content="Get from SEO newbie to SEO pro in 8 simple steps." />
<meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2019/12/fb-how-to-become-an-seo-expert.png" />
```

# 81 Incremental Static Regeneration (ISG)
- Ejemplo como en Udemy que se actualiza la página cada día
- Durante todo el día se mantiene en file system ls misma imagen, eventualmente después de las 24 horas, la primera solicitud que se vuelve a hacer a esa misma página regresa la página generada y ademas se almacena  y actualiza el file system para próximas peticiones
- Para la revalidación se la debe colocar en `getStaticProps` mediante la propiedad `revalidate`
```
return {
    props: {
      pokemon,
    },
    revalidate: 200000,
  };
```