# CSS avanzado

This branch is dedicated to the lab of advanced CSS. Done in class April 7th.

<ol>
  <li>¿Qué ventajas ofrecen las variables CSS sobre los valores hardcodeados?</li>
  Usando variables CSS ofrece consistencia y facilidad de manejo. Por ejemplo, al momento de cambiar un color, todo lo relacionado cambie al mismo tiempo en vez de cambiar todo individualmente. 
  <br><br>

  <li>¿En qué casos conviene declarar variables CSS fuera del selector :root? </li>
  Una variables se decalara fuera del root cuando se necesita especificar un atributo para permitir variaciones locales. 
  <br><br>

  <li>¿Cómo se pueden utilizar las variables CSS para implementar un sistema de temas (como modo oscuro)? </li>
  En el root y una clase media, se declaran los valores que se usan al momento de seleccionar la preferencia como modo dark o light. Asi, los valores de las variables cambian automaticamente.
  <br><br>

  <li>¿Qué sucede cuando intentas usar una variable CSS que no ha sido declarada? </li>
  La propiedad que intenta usarla ignora ese valor y busca el valor de reserva (fallback) si fue definido. Si no hay fallback, la propiedad hereda el valor de su padre o usa el valor inicial por defecto del navegador para esa propiedad.
  <br><br>

  <li> ¿Cuál es la diferencia entre los enfoques mobile-first y desktop-first?</li>
  En mobile-first se diseña para mobile primeramente y en desktop-first se diseña para escritorio primeramente.
  <br><br>

  <li>¿Qué breakpoints son los más comunes y por qué? </li>
   Los más comunes son 576px, 768px, 992px y 1200px. 
<br><br>

  <li>¿Cómo afecta el viewport meta tag al diseño responsivo?</li>
  Con este tag las dimensiones de la página web se adapta conforme la escala de la página. Por ejemplo, en un dispositivo móvil la página no se carga como si fuera de escritorio porque se adapta a las dimensiones.
<br><br>

  <li>¿Qué técnicas además de media queries existen para crear diseños responsivos? </li>
  Aparte, hay flexbox, css grid y unidades como rem, %, em, etc. 
<br><br>

  <li>¿Cómo puedes identificar qué regla CSS está siendo aplicada cuando hay múltiples selectores? </li>
  El navegador prioriza según el peso. Cuando el peso es igual, la última regla declarada es la que se usa. 
<br><br>

  <li> ¿Qué información proporciona la pestaña "Computed" en DevTools?</li>
  Muestra los valores finales y reales que el navegador está aplicando a un elemento (en píxeles), después de resolver todos los cálculos, herencias, variables y cascada de estilos. 
<br><br>

  <li> ¿Cómo puedes simular diferentes dispositivos sin tener acceso físico a ellos?</li>
  En DevTools del navegador, hay una herramienta del Modo de Dispositivo donde se pueden cambiar las dimensiones para ver la página. 
<br><br>

  <li>¿En qué situaciones es preferible usar Bootstrap sobre Tailwind CSS y viceversa? </li>
  Bootstrap es mejor para usar componentes pre-diseñados y un diseño rápido. Tailwind es mejor para proyectos más personalizados y únicos. 
<br><br>

  <li>¿Qué significa que Tailwind sea "utility-first"?</li>
  Significa que el diseño se construye componiendo clases de utilidad pequeñas y específicas directamente en el HTML.
<br><br>

  <li> ¿Cómo afecta el uso de un framework CSS al tamaño final del bundle?</li>
  Usando un framework normalmente pesan más ya que carga todo un CSS aunque no se usen todos los componentes.
<br><br>

  <li> ¿Es posible combinar múltiples frameworks CSS en un mismo proyecto? ¿Por qué sí o por qué no?</li>
  Es posible, pero no recomendado ya que puede causar conflictos con el tamaño y clases entre otras cosas. 
<br><br>

</ol>
