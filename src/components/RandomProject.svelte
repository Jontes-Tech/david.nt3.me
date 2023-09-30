<script lang="ts">
  import { writable } from "svelte/store";
  import type { Project } from "../types";
  const projects: Project[] = [
    {
      name: "Den laglösa gränsen",
      description: `”Det har nyligen föreslagits att Polismyndigheten, och i viss utsträckning även Kustbevakningen, Säkerhetspolisen och Tullverket, ska få utökade befogenheter i gränsnära områden. Det kan innebära att de får kroppsvisitera personer utan att det finns konkreta brottsmisstankar. Det är ett intrång av ett slag som sällan förekommer i det västerländska samhället. 

David Holmgren granskar förslaget från ett rättsfilosofiskt perspektiv. För det oss ett steg närmare demokratins avskaffande?”

-Svenska Clarteförbundet på Facebook`,
      url: "https://clarte.se/bloggen/119425-den-lagloesa-graensen-homo-sacer-undantagstillstandet-och-kroppsvisitationer-i-sverige?highlight=WyJkYXZpZCIsImhvbG1ncmVuIiwiZGF2aWQgaG9sbWdyZW4iXQ==",
    },
  ];
  const project = writable(0);
</script>

<div class="mx-auto max-w-7xl py-12">
  <div class="mx-8 print:mx-auto">
    <p>Text {$project + 1}/{projects.length}</p>
    <h2 class="font-bold text-4xl">{projects[$project].name}</h2>
    <p class="text-xl mb-4 whitespace-pre-wrap">
      {projects[$project].description}
    </p>
    <a href={projects[$project].url}
      class="bg-primary hover:bg-accent text-white font-bold py-2 px-6"
    >
    Läs
    </a>
    <!-- <button
    class="bg-primary hover:bg-accent text-white font-bold py-2 px-6"
    on:click={() => {
      if ($project === projects.length - 1) {
        $project = 0;
      } else {
        $project += 1;
      }
    }}>Visa en till text</button
  > -->
  </div>
</div>
