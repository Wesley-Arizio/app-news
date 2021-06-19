import React from 'react';
import NewsItem from './NewsItem';
import NewsModal from './NewsModal';

import './styles.css'

const News = () => {
    const [isNewsModalOpened, setIsNewsModalOpened] = React.useState(false);
    const [selectedNews, setSelectedNews] = React.useState(null);

    const news = [
        {
            title: 
            `How Republican States Are Expanding Their Power Over Elections`,
            body: 
            `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 
            `Targeting Biden, Catholic Bishops Advance Controversial Communion Plan`,
            body: 
            `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 
            `Democrats are assembling their own big economic bill to go with a bipartisan infrastructure plan. It faces steep challenges.`,
            body: 
            `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 'With Vaccination Goal in Doubt, Biden Warns of Variant’s Threat',
            body:             `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 'Pandemic updates: Coronavirus cases are surging again in Russia, many from the Delta variant first found in India.',
            body:             `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 
            `How Republican States Are Expanding Their Power Over Elections`,
            body: 
            `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 
            `Targeting Biden, Catholic Bishops Advance Controversial Communion Plan`,
            body: 
            `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 
            `Democrats are assembling their own big economic bill to go with a bipartisan infrastructure plan. It faces steep challenges.`,
            body: 
            `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 'With Vaccination Goal in Doubt, Biden Warns of Variant’s Threat',
            body:             `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 'Pandemic updates: Coronavirus cases are surging again in Russia, many from the Delta variant first found in India.',
            body:             `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 
            `How Republican States Are Expanding Their Power Over Elections`,
            body: 
            `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 
            `Targeting Biden, Catholic Bishops Advance Controversial Communion Plan`,
            body: 
            `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 
            `Democrats are assembling their own big economic bill to go with a bipartisan infrastructure plan. It faces steep challenges.`,
            body: 
            `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 'With Vaccination Goal in Doubt, Biden Warns of Variant’s Threat',
            body:             `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
        {
            title: 'Pandemic updates: Coronavirus cases are surging again in Russia, many from the Delta variant first found in India.',
            body:             `
            In Georgia, Republicans are removing Democrats of color from local boards. In Arkansas, they have stripped election control from county authorities. And they are expanding their election power in many other states.
            LaGRANGE, Ga. — Lonnie Hollis has been a member of the Troup County election board in West Georgia since 2013. A Democrat and one of two Black women on the board, she has advocated Sunday voting, helped voters on Election Days and pushed for a new precinct location at a Black church in a nearby town.

But this year, Ms. Hollis will be removed from the board, the result of a local election law signed by Gov. Brian Kemp, a Republican. Previously, election board members were selected by both political parties, county commissioners and the three biggest municipalities in Troup County. Now, the G.O.P.-controlled county commission has the sole authority to restructure the board and appoint all the new members.

“I speak out and I know the laws,” Ms. Hollis said in an interview. “The bottom line is they don’t like people that have some type of intelligence and know what they’re doing, because they know they can’t influence them.”

Ms. Hollis is not alone. Across Georgia, members of at least 10 county election boards have been removed, had their position eliminated or are likely to be kicked off through local ordinances or new laws passed by the state legislature. At least five are people of color and most are Democrats — though some are Republicans — and they will most likely all be replaced by Republicans.
            `,
        },
    ]


    const handleOpenNewsModal = (news) => {
        setIsNewsModalOpened(true);
        setSelectedNews(news);
    }

    const handleCloseNewsModal = () => {
        setIsNewsModalOpened(false);
        setSelectedNews({});
    }

    return (
        <section className="main-section">
            <h1>News</h1>
            {
                news.map((item, index) => (
                    <NewsItem key={index} title={item.title} body={item.body} openModal={handleOpenNewsModal} />
                ))
            }

            {isNewsModalOpened && <NewsModal news={selectedNews} close={handleCloseNewsModal} />}
        </section>
    )
}

export default News;