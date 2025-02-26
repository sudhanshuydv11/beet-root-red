export const MENU_OPTIONS={
   HOME:'HOME',
   AUTOMOTIVE_ARMOURING:'AUTOMOTIVE ARMOURING',
   BOMB_BLAST_PROTECTION:'BOMB & BLAST PROTECTION',
   BULLET_RESISTANT_PRODUCTS:'BULLET RESISTANT PRODUCTS',
   ABOUT_US:'ABOUT US',
   CONTACT_US:'CONTACT US'
};

export const SUB_MENU_OPTIONS={
    [MENU_OPTIONS.BOMB_BLAST_PROTECTION]: [
        {text:'BOMB INHIBITOR', link:'./bomb-inhibitor.html'},
        {text:'BOMB BASKET WITH TROLLEY', link:'./bomb-basket-with-trolley.html'},
        {text:'TACTICAL BUNKER', link: './tactical-bunker.html'},
        {text:'BOMB SUPPRESION BLANKET', link:'./bomb-blanket.html'}
        ],

    [MENU_OPTIONS.BULLET_RESISTANT_PRODUCTS]: [
        {text:'BR VEST', link:'./br-vest.html'},
        {text:'BR PATKA', link:'./br-patka.html'},
        {text:'BR HELMETS', link: './br-helmet.html'},
        {text:'BR OBSERVSTION TOWER', link:'./br-observation-tower.html'},
        {text:'ARCHITECTURAL ARMOURING', link:'./architectural-armouring.html'},
        {text:'BR LECTURE STAND', link: './br-lecture-stand.html'},
        {text:'BR SENTRY CABIN', link:'./br-sentry-cabin.html'},
        {text:'BR SHIELD', link:'./br-shield.html'},
        {text:'BR MORCHA', link: './br-morcha.html'}
        ]
}


