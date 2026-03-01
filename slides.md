---
theme: ./theme
background: ./akaria.png # some information about your slides (markdown enabled)
title: Juegos de rol
info: |
  ## Juegos de rol
# apply UnoCSS classes to the current slide
class: text-center
drawings:
  persist: false
transition: slide-up
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
# duration of the presentation
duration: 15min
---

# Juegos de rol{style="text-shadow: 2px 2px 8px black"}

<div class="abs-bl m-8 text-xl" style="text-shadow: 2px 2px 8px black">
Danielle Mayabb | SPAN 309
</div>

<div class="abs-br m-6 text-xl">
  <a href="https://github.com/slidevjs/slidev" name="Presentation code on GitHub" target="_blank" class="slidev-icon-btn " >
    <carbon:logo-github style="text-shadow: 2px 2px 8px black"/>
  </a>
</div>

<!--
Notes
-->

---
transition: fade-out
layout: section
reversed: true
---

# Vocabulario


---
transition: fade-out
layout: two-cols
layoutClass: reversed
---

## Verbos{style="margin-bottom: 0.5rem;"}

<dl>
    <div><dt>rolear</dt><dd>to role play</dd></div>
    <div><dt>lanzar, tirar</dt><dd>to roll / to throw (dice)</dd></div>
    <div><dt>dirigir, masterear</dt><dd>to DM (dungeon master)</dd></div>
</dl>

## Frases{style="margin-bottom: 0.5rem; margin-top: 1.5rem;"}

<dl>
    <div><dt>Es en éxito</dt><dd>It's a success</dd></div>
    <div><dt>Es un fallo</dt><dd>It's a failure</dd></div>
</dl>

::right::

## Sustantivos{style="margin-bottom: 0.5rem;"}
<dl>
    <div><dt>los dados</dt><dd>dice</dd></div>
    <div><dt>las reglas</dt><dd>rules</dd></div>
    <div><dt>el turno, la tirada</dt><dd>turn</dd></div>
    <div><dt>hoja/ficha de personaje</dt><dd>character sheet</dd></div>
    <div><dt>personajes jugables (PJ)</dt><dd>player characters (PC)</dd></div>
    <div><dt>personajes no jugables (PNJ)</dt><dd>non-player characters (NPC)</dd></div>
    <div><dt>crítico</dt><dd>critical hit (natural 20)</dd></div>
    <div><dt v-mark.circle.red>pifia</dt><dd>critical failure (natural 1)</dd></div>
    <div><dt>la campaña</dt><dd>campaign</dd></div>
    <div><dt>la mazmorra</dt><dd>dungeon</dd></div>
</dl>

---
transition: fade-out
layout: default
class: reversed
---

# ¿Qué son juegos de rol?

  <div v-mark="{at:6, type: 'bracket', brackets: 'bottom', color: '#2196f3'}" class="grid grid-cols-2 px-14 py-6 gap-12 items-center">
    <div class="flex items-center gap-8">
      <div v-mark="{ at: 3, type: 'bracket', brackets: 'right', color: '#2196f3' }"
           class="flex flex-col gap-3 text-xl">
        <span v-click="1" class="flex flex-col items-start gap-1 text-base"><ion-list-outline class="text-2xl" />Las reglas</span>
        <span v-click="1">+</span>
        <span v-click="1" class="flex flex-col items-start gap-1 text-base"><streamline-plump-world class="text-2xl" />El mundo</span>
        <span v-click="1">+</span>
        <span v-click="1" class="flex flex-col items-start gap-1 text-base"><fa6-solid-dragon class="text-2xl" />El género</span>
      </div>
      <span v-click="4" class="text-lg font-semibold leading-snug flex flex-col items-start gap-1"><iconoir-director-chair class="text-4xl" />La directora dirige</span>
    </div>
    <div class="flex items-center gap-8">
      <div v-mark="{ at: 5, type: 'bracket', brackets: 'right', color: '#2196f3' }"
           class="flex flex-col gap-3 text-xl">
        <span v-click="2" class="flex flex-col items-start gap-1 text-base"><material-symbols-light-history-edu-rounded class="text-4xl" />La narrativa compartida</span>
        <span v-click="2">+</span>
        <span v-click="2" class="flex flex-col items-start gap-1 text-base"><gravity-ui-branches-right class="text-2xl" />Las decisiones</span>
      </div>
      <span v-click="5" class="text-lg font-semibold leading-snug flex flex-col items-start gap-1"><fa6-solid-people-line class="text-4xl" />Los jugadores hacen</span>
    </div>
  </div>

  <div v-click="7" class="px-14 py-5 flex flex-col justify-center items-center gap-2 text-lg mt-5">
    <span>con la ayuda de <strong>implementos del destino</strong></span>
    <div class="flex gap-6">
      <streamline-ultimate-dice class="text-4xl" />
      <mdi-cards-playing-club-multiple class="text-4xl" />
    </div>
  </div>

---
transition: fade-out
layout: image-right
class: reversed
image: ./dungeon1.png
---

# ¿Por qué juegos de rol?

<v-clicks>

- Fortalecimiento de grupo
- Resolución de problemas
- Diversión
- Hacer ejercicios de creatividad
- Imaginar otras posibilidades

</v-clicks>

<style scoped>
li {
  font-size: 1.3em;
  margin-bottom: 0.6em;
}
</style>

---
transition: fade-out
layout: image-right
class: reversed
image: ./still-life-map-with-dice.jpg
---

# ¿Que es necesario?

<v-clicks>

- Un juego
- Un lugar
- Una hora (lo que es más difícil)
- Implementos del destino: dados, cartas, etc.
- Unos amigos! (si no estás jugando solo)
- Tu imaginación

</v-clicks>

<style scoped>
li {
  font-size: 1.3em;
  margin-bottom: 0.6em;
}
</style>

---
transition: fade-out
layout: section
reversed: true
---

# Tipos de Juegos de Rol


---
transition: fade-out
layout: section
reversed: true
---

# Juegos Solos


---
transition: fade-out
layout: default
class: reversed
---

# Juegos Solos


<SoloGallery class="mt-4" />


---
transition: fade-out
layout: section
reversed: true
---

# Juegos Cooperativos (no necesitan un máster/directora)


---
transition: fade-out
layout: default
class: reversed
---

# Juegos Cooperativos (no necesitan un máster/directora)

<CoopGallery :category-index="0" />


---
transition: fade-out
layout: section
reversed: true
---

# Juegos que necesitan un Máster/Directora


---
transition: fade-out
layout: default
class: reversed
---

# Juegos que necesitan un Máster/Directora

<GmGallery :category-index="0" />


---
layout: center
class: text-center reversed
---

# Juegos y Communidades en Español

- https://www.reddit.com/r/rollinglanguages/
- https://www.reddit.com/r/RolEnEspanol/
- https://itch.io/physical-games/lang-es/tag-ttrpg

---
layout: center
class: text-center reversed
---

# El Fin

Gracias!
