import React from 'react'
import 'twin.macro'

export default function Content() {
  return (<section tw='flex-grow p-4 space-y-2 overflow-auto'>
    <div tw='text-2xl font-bold'>what is this?</div>
    <p>
      when I made the other website, I opted into using plain html/scss/js because I believed it would be simpler for my very minimal purpose (i need to ask myself more whether simplicity should entail simpler tools or simpler process). but, as is actually written on there almost since inception, the reason people don't really do that anymore is because of 1-efficiency and 2-content management. so I decided to follow suit.</p>
    <p>
      and as a result I sought out more modern tools that would improve my workflow and make my code easier to maintain. React is awesome, and I'm a huge fan of the paradigm it introduces. using it and learning more about it has definitely improved my coding experience. finally I can find a sense of comfortable structure within the webstack mumbo jumbo with a seemingly infinite improvement potential only crippled by how much I know.
    </p>
    <p>
      there's also tailwind. one of the reasons why I was complaining about 'difficulty of maintaining' was I felt my scss file was getting too large. I fully realize it isn't large by the standards of well-accustomed, dedicated and seasoned web developers. that's according to my experience with other languages. it pairs nicely with react in terms of how I can separate my components so I could know exactly know where and what to look for, when I want to make changes.
    </p>
    <p>
      an unplanned but very welcome change also the adoption of react-three. learning threejs was what pivoted me into web apps from the start. I must say, three is very pleasant to use in this form.
    </p>
    <p>
      this is still in early stages.
    </p>
    <p>TODO:
     <ul tw='list-disc pl-2 pb-2'>
        <li>complete jamstack by integrating markdown for easier articles</li>
        <li>improve container ui, use typography for better formatting</li>
        <li>figure out how the page should look on mobile</li>
        <li>for the love of god, start working on actual scenes instead of getting distracted by code architecture and ui design (i can't help it, react is so good!)</li>
     </ul>
    </p>
  </section>
  )
}