---
theme: ./
layout: cover
background: https://images.unsplash.com/photo-1530819568329-97653eafbbfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2092&q=80
themeConfig:
  primary: '#4d7534'
---

# Presentation title

Presentation subtitle

---

# Slide Title

Slide Subtitle

* Slide bullet text
  * Slide bullet text
  * Slide bullet text
* Slide bullet text
* Slide bullet text

---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# Slide Title

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

---
layout: section
---

# Section Title

---
layout: statement
---

# Statement

---
layout: fact
---

# 100%
Fact information

---
layout: quote
---

# "Notable quote"
Attribution

---
layout: image-left
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# Code

```ts {all|2|1-6|all}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
}
```

---
layout: center
class: "text-center"
---

# Learn More

[Documentations](https://sli.dev) / [GitHub Repo](https://github.com/slidevjs/slidev)

---
layout: none
---

<!-- Dungeon map reveal — replace bg-gray-800 divs with your actual dungeon image -->
<div class="relative w-full h-full bg-gray-900 flex items-center justify-center">

  <!-- Placeholder dungeon map (swap src for your real image) -->
  <div class="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-2 p-4 opacity-30">
    <div class="bg-amber-900 rounded col-span-1 row-span-1 flex items-center justify-center text-white text-2xl">🚪</div>
    <div class="bg-amber-800 rounded col-span-1 row-span-1 flex items-center justify-center text-white text-2xl">⚔️</div>
    <div class="bg-amber-900 rounded col-span-1 row-span-1 flex items-center justify-center text-white text-2xl">🧪</div>
    <div class="bg-amber-800 rounded col-span-2 row-span-1 flex items-center justify-center text-white text-2xl">🏰</div>
    <div class="bg-red-900 rounded col-span-1 row-span-1 flex items-center justify-center text-white text-2xl">💀</div>
  </div>

  <!-- Fog of war overlays — each disappears on successive clicks -->
  <div v-click-hide="1" class="absolute bg-black rounded transition-opacity duration-500" style="top: 4%; left: 2%; width: 32%; height: 47%;" />
  <div v-click-hide="2" class="absolute bg-black rounded transition-opacity duration-500" style="top: 4%; left: 36%; width: 32%; height: 47%;" />
  <div v-click-hide="3" class="absolute bg-black rounded transition-opacity duration-500" style="top: 4%; left: 68%; width: 30%; height: 47%;" />
  <div v-click-hide="4" class="absolute bg-black rounded transition-opacity duration-500" style="top: 53%; left: 2%; width: 65%; height: 44%;" />
  <div v-click-hide="5" class="absolute bg-black rounded transition-opacity duration-500" style="top: 53%; left: 68%; width: 30%; height: 44%;" />

  <!-- Room labels that appear as fog is lifted -->
  <div v-click="1" class="absolute text-white font-bold drop-shadow-lg text-lg" style="top: 20%; left: 8%">Entrance</div>
  <div v-click="2" class="absolute text-white font-bold drop-shadow-lg text-lg" style="top: 20%; left: 42%">Armory</div>
  <div v-click="3" class="absolute text-white font-bold drop-shadow-lg text-lg" style="top: 20%; left: 72%">Lab</div>
  <div v-click="4" class="absolute text-white font-bold drop-shadow-lg text-lg" style="top: 68%; left: 25%">Great Hall</div>
  <div v-click="5" class="absolute text-white font-bold drop-shadow-lg text-lg" style="top: 68%; left: 72%">Boss Room</div>

</div>
