--
-- PostgreSQL database dump
--

-- Dumped from database version 12.2
-- Dumped by pg_dump version 12.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: villagers; Type: TABLE; Schema: public; Owner: kathynguyen
--

CREATE TABLE public.villagers (
    id integer NOT NULL,
    name text NOT NULL,
    image text NOT NULL,
    personality text NOT NULL
);


ALTER TABLE public.villagers OWNER TO kathynguyen;

--
-- Name: villagers_id_seq; Type: SEQUENCE; Schema: public; Owner: kathynguyen
--

CREATE SEQUENCE public.villagers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.villagers_id_seq OWNER TO kathynguyen;

--
-- Name: villagers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: kathynguyen
--

ALTER SEQUENCE public.villagers_id_seq OWNED BY public.villagers.id;


--
-- Name: villagers id; Type: DEFAULT; Schema: public; Owner: kathynguyen
--

ALTER TABLE ONLY public.villagers ALTER COLUMN id SET DEFAULT nextval('public.villagers_id_seq'::regclass);


--
-- Data for Name: villagers; Type: TABLE DATA; Schema: public; Owner: kathynguyen
--

COPY public.villagers (id, name, image, personality) FROM stdin;
247	Cheri	https://cdn.discordapp.com/attachments/709286174879121519/710333535180947556/Cheri.png	Peppy
235	Apple	https://cdn.discordapp.com/attachments/709286174879121519/710333436736569384/Apple.png	Peppy
232	Agent S	https://cdn.discordapp.com/attachments/709286174879121519/710333422765211678/Agent_S.png	Peppy
242	Bubbles	https://cdn.discordapp.com/attachments/709286174879121519/710333474573123664/Bubbles.png	Peppy
251	Felicity	https://cdn.discordapp.com/attachments/709286174879121519/710333558589227018/Felicity.png	Peppy
246	Chai	https://cdn.discordapp.com/attachments/709286174879121519/710333530432995378/Chai.png	Peppy
21	Fang	https://cdn.discordapp.com/attachments/709286174879121519/709635523970596916/Fang.png	Cranky
18	Del	https://cdn.discordapp.com/attachments/709286174879121519/709635476390412288/Del.png	Cranky
17	Cyrano	https://cdn.discordapp.com/attachments/709286174879121519/709635462364659742/Cyrano.png	Cranky
22	Frank	https://cdn.discordapp.com/attachments/709286174879121519/709636228596760596/Frank.png	Cranky
26	Groucho	https://cdn.discordapp.com/attachments/709286174879121519/709635604190855178/Groucho.png	Cranky
28	Hamphrey	https://cdn.discordapp.com/attachments/709286174879121519/709635678560059453/Hamphrey.png	Cranky
38	Octavian	https://cdn.discordapp.com/attachments/709286174879121519/709636384289456249/Octavian.png	Cranky
32	Kabuki	https://cdn.discordapp.com/attachments/709286174879121519/709636374646751253/Kabuki.png	Cranky
36	Monty	https://cdn.discordapp.com/attachments/709286174879121519/709636380279570460/Monty.png	Cranky
31	Ike	https://cdn.discordapp.com/attachments/709286174879121519/709636373329608794/Ike.png	Cranky
37	Murphy	https://cdn.discordapp.com/attachments/709286174879121519/709636382242635797/Murphy.png	Cranky
39	Peewee	https://cdn.discordapp.com/attachments/709286174879121519/709636414941298740/Peewee.png	Cranky
40	Rasher	https://cdn.discordapp.com/attachments/709286174879121519/709636411250180186/Rasher.png	Cranky
33	Knox	https://cdn.discordapp.com/attachments/709286174879121519/709636375422435338/Knox.png	Cranky
29	Harry	https://cdn.discordapp.com/attachments/709286174879121519/709636368615211069/Harry.png	Cranky
45	Rooney	https://cdn.discordapp.com/attachments/709286174879121519/709647895418109982/Rooney.png	Cranky
53	Walt	https://cdn.discordapp.com/attachments/709286174879121519/709973080562466898/Walt.png	Cranky
54	Wart Jr.	https://cdn.discordapp.com/attachments/709286174879121519/709973109012168784/Wart_Jr..png	Cranky
46	Roscoe	https://cdn.discordapp.com/attachments/709286174879121519/709972967349813248/Roscoe.png	Cranky
55	Wolfgang	https://cdn.discordapp.com/attachments/709286174879121519/709973087155650630/Wolfgang.png	Cranky
50	Tom	https://cdn.discordapp.com/attachments/709286174879121519/709973002078650519/Tom.png	Cranky
51	Vic	https://cdn.discordapp.com/attachments/709286174879121519/709973069963460608/Vic.png	Cranky
60	Bill	https://cdn.discordapp.com/attachments/709286174879121519/709973553511923852/Bill.png	Jock
57	Axel	https://cdn.discordapp.com/attachments/709286174879121519/709973550236434452/Axel.png	Jock
84	Louie	https://cdn.discordapp.com/attachments/709286174879121519/709974221840711680/Louie.png	Jock
78	Jay	https://cdn.discordapp.com/attachments/709286174879121519/709974169701580910/Jay.png	Jock
71	Drift	https://cdn.discordapp.com/attachments/709286174879121519/709973840977199104/Drift.png	Jock
66	Coach	https://cdn.discordapp.com/attachments/709286174879121519/709973794479014429/Coach.png	Jock
81	Kid Cat	https://cdn.discordapp.com/attachments/709286174879121519/709974208561545226/Kid_Cat.png	Jock
73	Frobert	https://cdn.discordapp.com/attachments/709286174879121519/709973848543461416/Frobert.png	Jock
63	Boots	https://cdn.discordapp.com/attachments/709286174879121519/709973783246798918/Boots.png	Jock
79	Jitters	https://cdn.discordapp.com/attachments/709286174879121519/709974173933633566/Jitters.png	Jock
69	Curly	https://cdn.discordapp.com/attachments/709286174879121519/709973831435157575/Curly.png	Jock
92	Ribbot	https://cdn.discordapp.com/attachments/709286174879121519/709975074601566218/Ribbot.png	Jock
88	Mott	https://cdn.discordapp.com/attachments/709286174879121519/709975034151567410/Mott.png	Jock
96	Rowan	https://cdn.discordapp.com/attachments/709286174879121519/709975104355827762/Rowan.png	Jock
93	Roald	https://cdn.discordapp.com/attachments/709286174879121519/709975086840545290/Roald.png	Jock
89	Peck	https://cdn.discordapp.com/attachments/709286174879121519/709975038077698108/Peck.png	Jock
90	Pierce	https://cdn.discordapp.com/attachments/709286174879121519/709975043878289438/Pierce.png	Jock
91	Poncho	https://cdn.discordapp.com/attachments/709286174879121519/709975048718516245/Poncho.png	Jock
87	Moose	https://cdn.discordapp.com/attachments/709286174879121519/709975029743485030/Moose.png	Jock
95	Rory	https://cdn.discordapp.com/attachments/709286174879121519/709975097871695903/Rory.png	Jock
97	Rudy	https://cdn.discordapp.com/attachments/709286174879121519/709975108344610816/Rudy.png	Jock
86	Mac	https://cdn.discordapp.com/attachments/709286174879121519/709975023779315722/Mac.png	Jock
94	Rod	https://cdn.discordapp.com/attachments/709286174879121519/709975091508674660/Rod.png	Jock
108	Tank	https://cdn.discordapp.com/attachments/709286174879121519/709975473291264010/Tank.png	Jock
99	Scoot	https://cdn.discordapp.com/attachments/709286174879121519/709975401572597860/Scoot.png	Jock
102	Snake	https://cdn.discordapp.com/attachments/709286174879121519/709975415413932062/Snake.png	Jock
100	Sheldon	https://cdn.discordapp.com/attachments/709286174879121519/709975406387658763/Sheldon.png	Jock
101	Sly	https://cdn.discordapp.com/attachments/709286174879121519/709975409420271658/Sly.png	Jock
103	Sparro	https://cdn.discordapp.com/attachments/709286174879121519/709975418396082306/Sparro.png	Jock
255	Ketchup	https://cdn.discordapp.com/attachments/709286174879121519/710333583537209404/Ketchup.png	Peppy
236	Audie	https://cdn.discordapp.com/attachments/709286174879121519/710333441773928468/Audie.png	Peppy
244	Candi	https://cdn.discordapp.com/attachments/709286174879121519/710333516608569344/Candi.png	Peppy
250	Dotty	https://cdn.discordapp.com/attachments/709286174879121519/710333552402759720/Dotty.png	Peppy
243	Bunnie	https://cdn.discordapp.com/attachments/709286174879121519/710333482399825970/Bunnie.png	Peppy
233	Anabelle	https://cdn.discordapp.com/attachments/709286174879121519/710333427190202439/Anabelle.png	Peppy
249	Cookie	https://cdn.discordapp.com/attachments/709286174879121519/710333546870341763/Cookie.png	Peppy
234	Anicotti	https://cdn.discordapp.com/attachments/709286174879121519/710333431552278588/Anicotti.png	Peppy
123	Broccolo	https://cdn.discordapp.com/attachments/709286174879121519/709975938712207370/Broccolo.png	Lazy
146	Joey	https://cdn.discordapp.com/attachments/709286174879121519/709977074789777418/Joey.png	Lazy
131	Deli	https://cdn.discordapp.com/attachments/709286174879121519/709976957789536296/Deli.png	Lazy
144	Jacob	https://cdn.discordapp.com/attachments/709286174879121519/709977065780412416/Jacob.png	Lazy
148	Marcel	https://cdn.discordapp.com/attachments/709286174879121519/709977082544783370/Marcel.png	Lazy
133	Dizzy	https://cdn.discordapp.com/attachments/709286174879121519/709976965297340467/Dizzy.png	Lazy
129	Cranston	https://cdn.discordapp.com/attachments/709286174879121519/709976950109765764/Cranston.png	Lazy
130	Cube	https://cdn.discordapp.com/attachments/709286174879121519/709976953750552626/Cube.png	Lazy
138	Elmer	https://cdn.discordapp.com/attachments/709286174879121519/709976989854990376/Elmer.png	Lazy
145	Jeremiah	https://cdn.discordapp.com/attachments/709286174879121519/709977070658387978/Jeremiah.png	Lazy
157	Punchy	https://cdn.discordapp.com/attachments/709286174879121519/709978402014363758/Punchy.png	Lazy
156	Pudge	https://cdn.discordapp.com/attachments/709286174879121519/709978397777985546/Pudge.png	Lazy
162	Simon	https://cdn.discordapp.com/attachments/709286174879121519/709978430220927087/Simon.png	Lazy
169	Weber	https://cdn.discordapp.com/attachments/709286174879121519/709978485644591144/Weber.png	Lazy
166	Tucker	https://cdn.discordapp.com/attachments/709286174879121519/709978469957894144/Tucker.png	Lazy
153	Papi	https://cdn.discordapp.com/attachments/709286174879121519/709978379822039080/Papi.png	Lazy
154	Prince	https://cdn.discordapp.com/attachments/709286174879121519/709978384741957672/Prince.png	Lazy
161	Sherb	https://cdn.discordapp.com/attachments/709286174879121519/709978421316550736/Sherb.png	Lazy
163	Spork	https://cdn.discordapp.com/attachments/709286174879121519/709978435069411348/Spork.png	Lazy
165	Stu	https://cdn.discordapp.com/attachments/709286174879121519/709978464500842567/Stu.png	Lazy
167	Wade	https://cdn.discordapp.com/attachments/709286174879121519/709978474542137364/Wade.png	Lazy
164	Stitches	https://cdn.discordapp.com/attachments/709286174879121519/709978439322697769/Stitches.png	Lazy
158	Raddle	https://cdn.discordapp.com/attachments/709286174879121519/709978406262931981/Raddle.png	Lazy
188	Ellie	https://cdn.discordapp.com/attachments/709286174879121519/709979301738446888/Ellie.png	Normal
192	Flurry	https://cdn.discordapp.com/attachments/709286174879121519/709979317819539497/Flurry.png	Normal
187	Dora	https://cdn.discordapp.com/attachments/709286174879121519/709979295917015050/Dora.png	Normal
193	Gala	https://cdn.discordapp.com/attachments/709286174879121519/709979322152386590/Gala.png	Normal
174	Ava	https://cdn.discordapp.com/attachments/709286174879121519/709979213255671818/Ava.png	Normal
175	Bea	https://cdn.discordapp.com/attachments/709286174879121519/709979217257037824/Bea.png	Normal
180	Carrie	https://cdn.discordapp.com/attachments/709286174879121519/709979243886673980/Carrie.png	Normal
172	Annalisa	https://cdn.discordapp.com/attachments/709286174879121519/709979202199224340/Annalisa.png	Normal
171	Alice	https://cdn.discordapp.com/attachments/709286174879121519/709979197744873541/Alice.png	Normal
199	Kiki	https://cdn.discordapp.com/attachments/709286174879121519/709980385731280956/Kiki.png	Normal
196	Gladys	https://cdn.discordapp.com/attachments/709286174879121519/709980368148758539/Gladys.png	Normal
197	Jambette	https://cdn.discordapp.com/attachments/709286174879121519/709980376440897566/Jambette.png	Normal
195	Goldie	https://cdn.discordapp.com/attachments/709286174879121519/709980372569423924/Goldie.png	Normal
198	June	https://cdn.discordapp.com/attachments/709286174879121519/709980381855613038/June.png	Normal
200	Kitt	https://cdn.discordapp.com/attachments/709286174879121519/709980389338251301/Kitt.png	Normal
212	Midge	https://cdn.discordapp.com/attachments/709286174879121519/710331398841434122/Midge.png	Normal
213	Mitzi	https://cdn.discordapp.com/attachments/709286174879121519/710331435797577768/Mitzi.png	Normal
201	Lily	https://cdn.discordapp.com/attachments/709286174879121519/710331328683573338/Lily.png	Normal
208	Marina	https://cdn.discordapp.com/attachments/709286174879121519/710331376553164810/Marina.png	Normal
214	Molly	https://cdn.discordapp.com/attachments/709286174879121519/710331440956440596/Molly.png	Normal
209	Megan	https://cdn.discordapp.com/attachments/709286174879121519/710331381581873152/Megan.png	Normal
216	Nana	https://cdn.discordapp.com/attachments/709286174879121519/710331449642844210/Nana.png	Normal
204	Maggie	https://cdn.discordapp.com/attachments/709286174879121519/710331349080473670/Maggie.png	Normal
203	Lucy	https://cdn.discordapp.com/attachments/709286174879121519/710331343786999878/Lucy.png	Normal
215	Nan	https://cdn.discordapp.com/attachments/709286174879121519/710331445356265522/Nan.png	Normal
206	Marcie	https://cdn.discordapp.com/attachments/709286174879121519/710331365794775097/Marcie.png	Normal
252	Flora	https://cdn.discordapp.com/attachments/709286174879121519/710333564633481266/Flora.png	Peppy
245	Carmen	https://cdn.discordapp.com/attachments/709286174879121519/710333523206078464/Carmen.png	Peppy
240	Bluebear	https://cdn.discordapp.com/attachments/709286174879121519/710333464485822515/Bluebear.png	Peppy
241	Bonbon	https://cdn.discordapp.com/attachments/709286174879121519/710333470110515236/Bonbon.png	Peppy
238	Bella	https://cdn.discordapp.com/attachments/709286174879121519/710333454021034065/Bella.png	Peppy
237	Bangle	https://cdn.discordapp.com/attachments/709286174879121519/710333449566945300/Bangle.png	Peppy
248	Chrissy	https://cdn.discordapp.com/attachments/709286174879121519/710333540012916846/Chrissy.png	Peppy
253	Freckles	https://cdn.discordapp.com/attachments/709286174879121519/710333568605487124/Freckles.png	Peppy
258	Nibbles	https://cdn.discordapp.com/attachments/709286174879121519/710334455620960276/Nibbles.png	Peppy
263	Peggy	https://cdn.discordapp.com/attachments/709286174879121519/710334484805058560/Peggy.png	Peppy
275	Tammi	https://cdn.discordapp.com/attachments/709286174879121519/710334575687106590/Tammi.png	Peppy
272	Ruby	https://cdn.discordapp.com/attachments/709286174879121519/710334562546352198/Ruby.png	Peppy
281	Wendy	https://cdn.discordapp.com/attachments/709286174879121519/710334659585638421/Wendy.png	Peppy
259	Pango	https://cdn.discordapp.com/attachments/709286174879121519/710334460096413817/Pango.png	Peppy
280	Victoria	https://cdn.discordapp.com/attachments/709286174879121519/710334647044669460/Victoria.png	Peppy
274	Tabby	https://cdn.discordapp.com/attachments/709286174879121519/710334571530682409/Tabby.png	Peppy
276	Tangy	https://cdn.discordapp.com/attachments/709286174879121519/710334582859235338/Tangy.png	Peppy
279	Twiggy	https://cdn.discordapp.com/attachments/709286174879121519/710334642573672498/Twiggy.png	Peppy
257	Merry	https://cdn.discordapp.com/attachments/709286174879121519/710334450491457577/Merry.png	Peppy
269	Puddles	https://cdn.discordapp.com/attachments/709286174879121519/710334546301681684/Puddles.png	Peppy
271	Rosie	https://cdn.discordapp.com/attachments/709286174879121519/710334556774989894/Rosie.png	Peppy
264	Penelope	https://cdn.discordapp.com/attachments/709286174879121519/710334489615925318/Penelope.png	Peppy
312	Raymond	https://cdn.discordapp.com/attachments/709286174879121519/710337180521725972/Raymond.png	Smug
294	Huck	https://cdn.discordapp.com/attachments/709286174879121519/710337029015339008/Huck.png	Smug
311	Quillson	https://cdn.discordapp.com/attachments/709286174879121519/710337175547281468/Quillson.png	Smug
291	Hans	https://cdn.discordapp.com/attachments/709286174879121519/710336993757888632/Hans.png	Smug
315	Tex	https://cdn.discordapp.com/attachments/709286174879121519/710337219717627924/Tex.png	Smug
284	Chadder	https://cdn.discordapp.com/attachments/709286174879121519/710336951068262459/Chadder.png	Smug
283	Beardo	https://cdn.discordapp.com/attachments/709286174879121519/710336945292574731/Beardo.png	Smug
299	Kidd	https://cdn.discordapp.com/attachments/709286174879121519/710337060220829786/Kidd.png	Smug
317	Zell	https://cdn.discordapp.com/attachments/709286174879121519/710337245873438790/Zell.png	Smug
296	Julian	https://cdn.discordapp.com/attachments/709286174879121519/710337037185712158/Julian.png	Smug
285	Chops	https://cdn.discordapp.com/attachments/709286174879121519/710336958911741982/Chops.png	Smug
293	Hippeux	https://cdn.discordapp.com/attachments/709286174879121519/710337024900726864/Hippeux.png	Smug
300	Klaus	https://cdn.discordapp.com/attachments/709286174879121519/710337067636359188/Klaus.png	Smug
314	Shep	https://cdn.discordapp.com/attachments/709286174879121519/710337206392455199/Shep.png	Smug
318	Alli	https://cdn.discordapp.com/attachments/709286174879121519/710338620162310227/Alli.png	Snooty
320	Ankha	https://cdn.discordapp.com/attachments/709286174879121519/710338630924894248/Ankha.png	Snooty
319	Amelia	https://cdn.discordapp.com/attachments/709286174879121519/710338626197651526/Amelia.png	Snooty
321	Annalise	https://cdn.discordapp.com/attachments/709286174879121519/710338635282776134/Annalise.png	Snooty
323	Baabara	https://cdn.discordapp.com/attachments/709286174879121519/710338646061875271/Baabara.png	Snooty
322	Astrid	https://cdn.discordapp.com/attachments/709286174879121519/710338640022339664/Astrid.png	Snooty
254	Gabi	https://cdn.discordapp.com/attachments/709286174879121519/710333579380654081/Gabi.png	Peppy
256	Maddie	https://cdn.discordapp.com/attachments/709286174879121519/710333653506326578/Maddie.png	Peppy
239	Bianca	https://cdn.discordapp.com/attachments/709286174879121519/710333460056899584/Bianca.png	Peppy
277	Truffles	https://cdn.discordapp.com/attachments/709286174879121519/710334627369189446/Truffles.png	Peppy
337	Freya	https://cdn.discordapp.com/attachments/709286174879121519/710338746104676474/Freya.png	Snooty
1	Admiral	https://cdn.discordapp.com/attachments/709286174879121519/709634231646814258/Admiral.png	Cranky
8	Butch	https://cdn.discordapp.com/attachments/709286174879121519/709634370113241088/Butch.png	Cranky
9	Buzz	https://cdn.discordapp.com/attachments/709286174879121519/709635208709931100/Buzz.png	Cranky
11	Cesar	https://cdn.discordapp.com/attachments/709286174879121519/709634677438414848/Cesar.png	Cranky
6	Boyd	https://cdn.discordapp.com/attachments/709286174879121519/709634318494072893/Boyd.png	Cranky
3	Apollo	https://cdn.discordapp.com/attachments/709286174879121519/709634271719194664/Apollo.png	Cranky
12	Chief	https://cdn.discordapp.com/attachments/709286174879121519/709634701522108416/Chief.png	Cranky
5	Boris	https://cdn.discordapp.com/attachments/709286174879121519/709634287049375784/Boris.png	Cranky
4	Avery	https://cdn.discordapp.com/attachments/709286174879121519/709634975447777300/Avery.png	Cranky
7	Bruce	https://cdn.discordapp.com/attachments/709286174879121519/709634347870715924/Bruce.png	Cranky
2	Angus	https://cdn.discordapp.com/attachments/709286174879121519/709634252232327208/Angus.png	Cranky
10	Camofrog	https://cdn.discordapp.com/attachments/709286174879121519/709634657120944248/Camofrog.png	Cranky
23	Gaston	https://cdn.discordapp.com/attachments/709286174879121519/709635542576529428/Gaston.png	Cranky
27	Gruff	https://cdn.discordapp.com/attachments/709286174879121519/709635617771880528/Gruff.png	Cranky
328	Bree	https://cdn.discordapp.com/attachments/709286174879121519/710338700323586058/Bree.png	Snooty
331	Claudia	https://cdn.discordapp.com/attachments/709286174879121519/710338717767696444/Claudia.png	Snooty
350	Miranda	https://cdn.discordapp.com/attachments/709286174879121519/710340052424589370/Miranda.png	Snooty
341	Greta	https://cdn.discordapp.com/attachments/709286174879121519/710339984732848180/Greta.png	Snooty
354	Opal	https://cdn.discordapp.com/attachments/709286174879121519/710340072167440454/Opal.png	Snooty
343	Judy	https://cdn.discordapp.com/attachments/709286174879121519/710339993809191012/Judy.png	Snooty
355	Pancetti	https://cdn.discordapp.com/attachments/709286174879121519/710340078014038106/Pancetti.png	Snooty
361	Snooty	https://cdn.discordapp.com/attachments/709286174879121519/710340627979567164/Snooty.png	Snooty
366	Tipper	https://cdn.discordapp.com/attachments/709286174879121519/710340651082055750/Tipper.png	Snooty
370	Whitney	https://cdn.discordapp.com/attachments/709286174879121519/710340689560600676/Whitney.png	Snooty
371	Willow	https://cdn.discordapp.com/attachments/709286174879121519/710340694576857088/Willow.png	Snooty
363	Tasha	https://cdn.discordapp.com/attachments/709286174879121519/710340637710352394/Tasha.png	Snooty
362	Soleil	https://cdn.discordapp.com/attachments/709286174879121519/710340632576786434/Soleil.png	Snooty
372	Yuka	https://cdn.discordapp.com/attachments/709286174879121519/710340698431553576/Yuka.png	Snooty
359	Queenie	https://cdn.discordapp.com/attachments/709286174879121519/710340619448352868/Queenie.png	Snooty
368	Violet	https://cdn.discordapp.com/attachments/709286174879121519/710340677656903690/Violet.png	Snooty
367	Velma	https://cdn.discordapp.com/attachments/709286174879121519/710340654646951976/Velma.png	Snooty
369	Vivian	https://cdn.discordapp.com/attachments/709286174879121519/710340683805884426/Vivian.png	Snooty
376	Cherry	https://cdn.discordapp.com/attachments/709286174879121519/710341275513126992/Cherry.png	Uchi
395	Tammy	https://cdn.discordapp.com/attachments/709286174879121519/710341391884222508/Tammy.png	Uchi
377	Deirdre	https://cdn.discordapp.com/attachments/709286174879121519/710341279745048596/Deirdre.png	Uchi
393	Shari	https://cdn.discordapp.com/attachments/709286174879121519/710341383906394163/Shari.png	Uchi
394	Sylvia	https://cdn.discordapp.com/attachments/709286174879121519/710341388260081665/Sylvia.png	Uchi
378	Diva	https://cdn.discordapp.com/attachments/709286174879121519/710341283603939348/Diva.png	Uchi
390	Renee	https://cdn.discordapp.com/attachments/709286174879121519/710341370233225256/Renee.png	Uchi
384	Mira	https://cdn.discordapp.com/attachments/709286174879121519/710341339879047268/Mira.png	Uchi
15	Curt	https://cdn.discordapp.com/attachments/709286174879121519/709635432668856320/Curt.png	Cranky
24	Gonzo	https://cdn.discordapp.com/attachments/709286174879121519/709635567100362772/Gonzo.png	Cranky
19	Dobie	https://cdn.discordapp.com/attachments/709286174879121519/709635492572037191/Dobie.png	Cranky
14	Croque	https://cdn.discordapp.com/attachments/709286174879121519/709635409298194482/Croque.png	Cranky
20	Elvis	https://cdn.discordapp.com/attachments/709286174879121519/709635505687363594/Elvis.png	Cranky
16	Cyd	https://cdn.discordapp.com/attachments/709286174879121519/709635447793516596/Cyd.png	Cranky
25	Grizzly	https://cdn.discordapp.com/attachments/709286174879121519/709635582636326922/Grizzly.png	Cranky
13	Chow	https://cdn.discordapp.com/attachments/709286174879121519/709635383058497596/Chow.png	Cranky
41	Ricky	https://cdn.discordapp.com/attachments/709286174879121519/709636422377799720/Ricky.png	Cranky
44	Rolf	https://cdn.discordapp.com/attachments/709286174879121519/709636429701054524/Rolf.png	Cranky
30	Hopper	https://cdn.discordapp.com/attachments/709286174879121519/709636372574634064/Hopper.png	Cranky
35	Lobo	https://cdn.discordapp.com/attachments/709286174879121519/709636379944157214/Lobo.png	Cranky
43	Rocco	https://cdn.discordapp.com/attachments/709286174879121519/709636425926049882/Rocco.png	Cranky
42	Rizzo	https://cdn.discordapp.com/attachments/709286174879121519/709636423871103046/Rizzo.png	Cranky
34	Limberg	https://cdn.discordapp.com/attachments/709286174879121519/709636377029115924/Limberg.png	Cranky
47	Spike	https://cdn.discordapp.com/attachments/709286174879121519/709972982956687381/Spike.png	Cranky
48	Static	https://cdn.discordapp.com/attachments/709286174879121519/709972996164681768/Static.png	Cranky
61	Billy	https://cdn.discordapp.com/attachments/709286174879121519/709973555059884053/Billy.png	Jock
59	Biff	https://cdn.discordapp.com/attachments/709286174879121519/709973552736239666/Biff.png	Jock
56	Antonio	https://cdn.discordapp.com/attachments/709286174879121519/709973549301104730/Antonio.png	Jock
49	T-Bone	https://cdn.discordapp.com/attachments/709286174879121519/709973107380846664/T-Bone.png	Cranky
52	Vladimir	https://cdn.discordapp.com/attachments/709286174879121519/709973075390890064/Vladimir.png	Cranky
58	Bam	https://cdn.discordapp.com/attachments/709286174879121519/709973551901573120/Bam.png	Jock
68	Cousteau	https://cdn.discordapp.com/attachments/709286174879121519/709973826775023666/Cousteau.png	Jock
67	Cobb	https://cdn.discordapp.com/attachments/709286174879121519/709973797427478529/Cobb.png	Jock
80	Kevin	https://cdn.discordapp.com/attachments/709286174879121519/709974204212314122/Kevin.png	Jock
72	Flip	https://cdn.discordapp.com/attachments/709286174879121519/709973844680507412/Flip.png	Jock
74	Genji	https://cdn.discordapp.com/attachments/709286174879121519/709974154090381322/Genji.png	Jock
70	Dom	https://cdn.discordapp.com/attachments/709286174879121519/709973836933627934/Dom.png	Jock
75	Goose	https://cdn.discordapp.com/attachments/709286174879121519/709974156510232677/Goose.png	Jock
62	Boone	https://cdn.discordapp.com/attachments/709286174879121519/709973779752943646/Boone.png	Jock
85	Lyman	https://cdn.discordapp.com/attachments/709286174879121519/709974226093867048/Lyman.png	Jock
77	Iggly	https://cdn.discordapp.com/attachments/709286174879121519/709974165310144542/Iggly.png	Jock
64	Buck	https://cdn.discordapp.com/attachments/709286174879121519/709973786765688892/Buck.png	Jock
83	Leonardo	https://cdn.discordapp.com/attachments/709286174879121519/709974218632069150/Leonardo.png	Jock
76	Hamlet	https://cdn.discordapp.com/attachments/709286174879121519/709974161841455124/Hamlet.png	Jock
82	Kody	https://cdn.discordapp.com/attachments/709286174879121519/709974212823089244/Kody.png	Jock
65	Bud	https://cdn.discordapp.com/attachments/709286174879121519/709973790301356062/Bud.png	Jock
109	Teddy	https://cdn.discordapp.com/attachments/709286174879121519/709975476164362250/Teddy.png	Jock
110	Tybalt	https://cdn.discordapp.com/attachments/709286174879121519/709975506572935168/Tybalt.png	Jock
105	Sterling	https://cdn.discordapp.com/attachments/709286174879121519/709975457382006844/Sterling.png	Jock
106	Stinky	https://cdn.discordapp.com/attachments/709286174879121519/709975460741775360/Stinky.png	Jock
104	Sprocket	https://cdn.discordapp.com/attachments/709286174879121519/709975444061028362/Sprocket.png	Jock
98	Samson	https://cdn.discordapp.com/attachments/709286174879121519/709975398976585728/Samson.png	Jock
107	Tad	https://cdn.discordapp.com/attachments/709286174879121519/709975466534240332/Tad.png	Jock
125	Claude	https://cdn.discordapp.com/attachments/709286174879121519/709975948404981791/Claude.png	Lazy
111	Al	https://cdn.discordapp.com/attachments/709286174879121519/709975854553497680/Al.png	Lazy
122	Boomer	https://cdn.discordapp.com/attachments/709286174879121519/709975916578865242/Boomer.png	Lazy
117	Benjamin	https://cdn.discordapp.com/attachments/709286174879121519/709975896035033118/Benjamin.png	Lazy
112	Alfonso	https://cdn.discordapp.com/attachments/709286174879121519/709975859020169236/Alfonso.png	Lazy
114	Barold	https://cdn.discordapp.com/attachments/709286174879121519/709975867052261437/Barold.png	Lazy
113	Anchovy	https://cdn.discordapp.com/attachments/709286174879121519/709975863432839278/Anchovy.png	Lazy
120	Bob	https://cdn.discordapp.com/attachments/709286174879121519/709975907913171054/Bob.png	Lazy
124	Chester	https://cdn.discordapp.com/attachments/709286174879121519/709975942688407592/Chester.png	Lazy
119	Biskit	https://cdn.discordapp.com/attachments/709286174879121519/709975903718866964/Biskit.png	Lazy
126	Clay	https://cdn.discordapp.com/attachments/709286174879121519/709975951676538940/Clay.png	Lazy
116	Benedict	https://cdn.discordapp.com/attachments/709286174879121519/709975874677768242/Benedict.png	Lazy
115	Beau	https://cdn.discordapp.com/attachments/709286174879121519/709975870898700358/Beau.png	Lazy
121	Bones	https://cdn.discordapp.com/attachments/709286174879121519/709975912506196029/Bones.png	Lazy
128	Cole	https://cdn.discordapp.com/attachments/709286174879121519/709975961696993320/Cole.png	Lazy
127	Clyde	https://cdn.discordapp.com/attachments/709286174879121519/709975955816316978/Clyde.png	Lazy
118	Big Top	https://cdn.discordapp.com/attachments/709286174879121519/709975899751317505/Big_Top.png	Lazy
132	Derwin	https://cdn.discordapp.com/attachments/709286174879121519/709976961224540206/Derwin.png	Lazy
151	Ozzie	https://cdn.discordapp.com/attachments/709286174879121519/709977103218638868/Ozzie.png	Lazy
141	Hopkins	https://cdn.discordapp.com/attachments/709286174879121519/709977048566857768/Hopkins.png	Lazy
139	Erik	https://cdn.discordapp.com/attachments/709286174879121519/709976997236834334/Erik.png	Lazy
149	Moe	https://cdn.discordapp.com/attachments/709286174879121519/709977087372689509/Moe.png	Lazy
152	Paolo	https://cdn.discordapp.com/attachments/709286174879121519/709977110466527283/Paolo.png	Lazy
134	Doc	https://cdn.discordapp.com/attachments/709286174879121519/709976970733027408/Doc.png	Lazy
137	Egbert	https://cdn.discordapp.com/attachments/709286174879121519/709976985232867369/Egbert.png	Lazy
135	Drago	https://cdn.discordapp.com/attachments/709286174879121519/709976974529134743/Drago.png	Lazy
143	Hugh	https://cdn.discordapp.com/attachments/709286174879121519/709977059405070356/Hugh.png	Lazy
147	Lucky	https://cdn.discordapp.com/attachments/709286174879121519/709977078690480167/Lucky.png	Lazy
150	Nate	https://cdn.discordapp.com/attachments/709286174879121519/709977090803630130/Nate.png	Lazy
140	Filbert	https://cdn.discordapp.com/attachments/709286174879121519/709977721442271242/Filbert.png	Lazy
142	Hornsby	https://cdn.discordapp.com/attachments/709286174879121519/709977055151915058/Hornsby.png	Lazy
136	Drake	https://cdn.discordapp.com/attachments/709286174879121519/709976980803682333/Drake.png	Lazy
168	Walker	https://cdn.discordapp.com/attachments/709286174879121519/709978479311192094/Walker.png	Lazy
170	Zucker	https://cdn.discordapp.com/attachments/709286174879121519/709978499473080436/Zucker.png	Lazy
159	Rex	https://cdn.discordapp.com/attachments/709286174879121519/709978410688184320/Rex.png	Lazy
155	Puck	https://cdn.discordapp.com/attachments/709286174879121519/709978390219849768/Puck.png	Lazy
160	Rodeo	https://cdn.discordapp.com/attachments/709286174879121519/709978415834333194/Rodeo.png	Lazy
194	Gayle	https://cdn.discordapp.com/attachments/709286174879121519/709979370634084383/Gayle.png	Normal
178	Cally	https://cdn.discordapp.com/attachments/709286174879121519/709979234319335424/Cally.png	Normal
186	Deena	https://cdn.discordapp.com/attachments/709286174879121519/709979292003467284/Deena.png	Normal
185	Daisy	https://cdn.discordapp.com/attachments/709286174879121519/709979287431806997/Daisy.png	Normal
173	Aurora	https://cdn.discordapp.com/attachments/709286174879121519/709979208784543768/Aurora.png	Normal
177	Bettina	https://cdn.discordapp.com/attachments/709286174879121519/709979229114073098/Bettina.png	Normal
191	Fauna	https://cdn.discordapp.com/attachments/709286174879121519/709979314023563274/Fauna.png	Normal
183	Chevre	https://cdn.discordapp.com/attachments/709286174879121519/709979278384824331/Chevre.png	Normal
190	Eunice	https://cdn.discordapp.com/attachments/709286174879121519/709979310341095525/Eunice.png	Normal
179	Caroline	https://cdn.discordapp.com/attachments/709286174879121519/709979239629455441/Caroline.png	Normal
176	Bertha	https://cdn.discordapp.com/attachments/709286174879121519/709979221312798781/Bertha.png	Normal
184	Coco	https://cdn.discordapp.com/attachments/709286174879121519/709979283413532692/Coco.png	Normal
181	Celia	https://cdn.discordapp.com/attachments/709286174879121519/709979249251057684/Celia.png	Normal
223	Sally	https://cdn.discordapp.com/attachments/709286174879121519/710331488331366410/Sally.png	Normal
226	Skye	https://cdn.discordapp.com/attachments/709286174879121519/710331521277493288/Skye.png	Normal
230	Tia	https://cdn.discordapp.com/attachments/709286174879121519/710333085874651140/Tia.png	Normal
229	Sylvana	https://cdn.discordapp.com/attachments/709286174879121519/710331536351821925/Sylvana.png	Normal
231	Vesta	https://cdn.discordapp.com/attachments/709286174879121519/710331541347368990/Vesta.png	Normal
217	Norma	https://cdn.discordapp.com/attachments/709286174879121519/710331453355065354/Norma.png	Normal
219	Peaches	https://cdn.discordapp.com/attachments/709286174879121519/710331456747995207/Peaches.png	Normal
224	Sandy	https://cdn.discordapp.com/attachments/709286174879121519/710333075166330900/Sandy.png	Normal
228	Sydney	https://cdn.discordapp.com/attachments/709286174879121519/710331530756620318/Sydney.png	Normal
222	Rhonda	https://cdn.discordapp.com/attachments/709286174879121519/710331481322553344/Rhonda.png	Normal
210	Melba	https://cdn.discordapp.com/attachments/709286174879121519/710331386006994974/Melba.png	Normal
205	Maple	https://cdn.discordapp.com/attachments/709286174879121519/710331357510762546/Maple.png	Normal
218	Olive	https://cdn.discordapp.com/attachments/709286174879121519/710333068648513596/Olive.png	Normal
220	Pekoe	https://cdn.discordapp.com/attachments/709286174879121519/710331460216946729/Pekoe.png	Normal
225	Savannah	https://cdn.discordapp.com/attachments/709286174879121519/710331515812184204/Savannah.png	Normal
207	Margie	https://cdn.discordapp.com/attachments/709286174879121519/710331370467229748/Margie.png	Normal
211	Merengue	https://cdn.discordapp.com/attachments/709286174879121519/710331393426849874/Merengue.png	Normal
227	Stella	https://cdn.discordapp.com/attachments/709286174879121519/710331526289555477/Stella.png	Normal
202	Lolly	https://cdn.discordapp.com/attachments/709286174879121519/710331338561159198/Lolly.png	Normal
221	Poppy	https://cdn.discordapp.com/attachments/709286174879121519/710331474179784754/Poppy.png	Normal
278	Tutu	https://cdn.discordapp.com/attachments/709286174879121519/710334634675929109/Tutu.png	Peppy
265	Pinky	https://cdn.discordapp.com/attachments/709286174879121519/710334493344530494/Pinky.png	Peppy
268	Pompom	https://cdn.discordapp.com/attachments/709286174879121519/710334540148637756/Pompom.png	Peppy
270	Rilla	https://cdn.discordapp.com/attachments/709286174879121519/710335351591403580/Rilla.png	Peppy
282	Winnie	https://cdn.discordapp.com/attachments/709286174879121519/710334669379600404/Winnie.png	Peppy
260	Pate	https://cdn.discordapp.com/attachments/709286174879121519/710334464236060712/Pate.png	Peppy
273	Sprinkle	https://cdn.discordapp.com/attachments/709286174879121519/710335765342584913/Sprinkle.png	Peppy
262	Peanut	https://cdn.discordapp.com/attachments/709286174879121519/710334473140699246/Peanut.png	Peppy
267	Pippy	https://cdn.discordapp.com/attachments/709286174879121519/710334535132512256/Pippy.png	Peppy
266	Piper	https://cdn.discordapp.com/attachments/709286174879121519/710334498746794074/Piper.png	Peppy
261	Patty	https://cdn.discordapp.com/attachments/709286174879121519/710334468111466506/Patty.png	Peppy
307	O'Hare	https://cdn.discordapp.com/attachments/709286174879121519/710337139509952523/OHare.png	Smug
302	Leopold	https://cdn.discordapp.com/attachments/709286174879121519/710337077853683732/Leopold.png	Smug
288	Ed	https://cdn.discordapp.com/attachments/709286174879121519/710336979694256218/Ed.png	Smug
289	Eugene	https://cdn.discordapp.com/attachments/709286174879121519/710336983825907732/Eugene.png	Smug
301	Kyle	https://cdn.discordapp.com/attachments/709286174879121519/710337073478893748/Kyle.png	Smug
313	Rodney	https://cdn.discordapp.com/attachments/709286174879121519/710337199417327646/Rodney.png	Smug
287	Curlos	https://cdn.discordapp.com/attachments/709286174879121519/710336973793132605/Curlos.png	Smug
295	Jacques	https://cdn.discordapp.com/attachments/709286174879121519/710337033243197500/Jacques.png	Smug
304	Lopez	https://cdn.discordapp.com/attachments/709286174879121519/710337125194661919/Lopez.png	Smug
305	Lucha	https://cdn.discordapp.com/attachments/709286174879121519/710337129615720548/Lucha.png	Smug
306	Marshal	https://cdn.discordapp.com/attachments/709286174879121519/710337134707474432/Marshal.png	Smug
292	Henry	https://cdn.discordapp.com/attachments/709286174879121519/710336998401114112/Henry.png	Smug
297	Keaton	https://cdn.discordapp.com/attachments/709286174879121519/710337043246350446/Keaton.png	Smug
308	Olaf	https://cdn.discordapp.com/attachments/709286174879121519/710337143200809010/Olaf.png	Smug
303	Lionel	https://cdn.discordapp.com/attachments/709286174879121519/710337120434257920/Lionel.png	Smug
310	Pietro	https://cdn.discordapp.com/attachments/709286174879121519/710337163241455706/Pietro.png	Smug
298	Ken	https://cdn.discordapp.com/attachments/709286174879121519/710337047935844442/Ken.png	Smug
309	Phil	https://cdn.discordapp.com/attachments/709286174879121519/710337156983422986/Phil.png	Smug
286	Colton	https://cdn.discordapp.com/attachments/709286174879121519/710336966088196146/Colton.png	Smug
290	Graham	https://cdn.discordapp.com/attachments/709286174879121519/710336988569403418/Graham.png	Smug
327	Blanche	https://cdn.discordapp.com/attachments/709286174879121519/710338676521041940/Blanche.png	Snooty
325	Bitty	https://cdn.discordapp.com/attachments/709286174879121519/710338657227374622/Bitty.png	Snooty
326	Blaire	https://cdn.discordapp.com/attachments/709286174879121519/710338666664427571/Blaire.png	Snooty
324	Becky	https://cdn.discordapp.com/attachments/709286174879121519/710338650562363432/Becky.png	Snooty
336	Francine	https://cdn.discordapp.com/attachments/709286174879121519/710338740081655878/Francine.png	Snooty
332	Cleo	https://cdn.discordapp.com/attachments/709286174879121519/710338722284961842/Cleo.png	Snooty
333	Diana	https://cdn.discordapp.com/attachments/709286174879121519/710338726785581076/Diana.png	Snooty
335	Eloise	https://cdn.discordapp.com/attachments/709286174879121519/710338734763278347/Eloise.png	Snooty
329	Broffina	https://cdn.discordapp.com/attachments/709286174879121519/710338704564289556/Broffina.png	Snooty
330	Cashmere	https://cdn.discordapp.com/attachments/709286174879121519/710338711375577148/Cashmere.png	Snooty
334	Elise	https://cdn.discordapp.com/attachments/709286174879121519/710338730854055956/Elise.png	Snooty
351	Monique	https://cdn.discordapp.com/attachments/709286174879121519/710340057294438430/Monique.png	Snooty
344	Julia	https://cdn.discordapp.com/attachments/709286174879121519/710339999371100250/Julia.png	Snooty
346	Maelle	https://cdn.discordapp.com/attachments/709286174879121519/710340007549861928/Maelle.png	Snooty
353	Olivia	https://cdn.discordapp.com/attachments/709286174879121519/710340068270669874/Olivia.png	Snooty
340	Gloria	https://cdn.discordapp.com/attachments/709286174879121519/710339979712266280/Gloria.png	Snooty
338	Friga	https://cdn.discordapp.com/attachments/709286174879121519/710339971097296916/Friga.png	Snooty
349	Mint	https://cdn.discordapp.com/attachments/709286174879121519/710340047248949268/Mint.png	Snooty
342	Gwen	https://cdn.discordapp.com/attachments/709286174879121519/710339988629225472/Gwen.png	Snooty
348	Mathilda	https://cdn.discordapp.com/attachments/709286174879121519/710340041422929963/Mathilda.png	Snooty
345	Kitty	https://cdn.discordapp.com/attachments/709286174879121519/710340003284123668/Kitty.png	Snooty
357	Portia	https://cdn.discordapp.com/attachments/709286174879121519/710340087728308344/Portia.png	Snooty
352	Naomi	https://cdn.discordapp.com/attachments/709286174879121519/710340061635543120/Naomi.png	Snooty
356	Pecan	https://cdn.discordapp.com/attachments/709286174879121519/710340083785531392/Pecan.png	Snooty
347	Mallary	https://cdn.discordapp.com/attachments/709286174879121519/710340012033703996/Mallary.png	Snooty
339	Gigi	https://cdn.discordapp.com/attachments/709286174879121519/710339975027228676/Gigi.png	Snooty
358	Purrl	https://cdn.discordapp.com/attachments/709286174879121519/710340613500960818/Purrl.png	Snooty
360	Robin	https://cdn.discordapp.com/attachments/709286174879121519/710340623793651742/Robin.png	Snooty
364	Tiffany	https://cdn.discordapp.com/attachments/709286174879121519/710340642617950248/Tiffany.png	Snooty
365	Timbra	https://cdn.discordapp.com/attachments/709286174879121519/710340647378354236/Timbra.png	Snooty
386	Pashmina	https://cdn.discordapp.com/attachments/709286174879121519/710341349991383060/Pashmina.png	Uchi
385	Muffy	https://cdn.discordapp.com/attachments/709286174879121519/710341345608204500/Muffy.png	Uchi
392	Reneigh	https://cdn.discordapp.com/attachments/709286174879121519/710341375266258995/Reneigh.png	Uchi
382	Hazel	https://cdn.discordapp.com/attachments/709286174879121519/710341907674431548/Hazel.png	Uchi
383	Katt	https://cdn.discordapp.com/attachments/709286174879121519/710341330483675136/Katt.png	Uchi
387	Paula	https://cdn.discordapp.com/attachments/709286174879121519/710341354554654760/Paula.png	Uchi
374	Canberra	https://cdn.discordapp.com/attachments/709286174879121519/710341256227586119/Canberra.png	Uchi
396	Ursala	https://cdn.discordapp.com/attachments/709286174879121519/710341396527317033/Ursala.png	Uchi
389	Plucky	https://cdn.discordapp.com/attachments/709286174879121519/710341363706888293/Plucky.png	Uchi
380	Frita	https://cdn.discordapp.com/attachments/709286174879121519/710341292907036712/Frita.png	Uchi
373	Agnes	https://cdn.discordapp.com/attachments/709286174879121519/710341248262864976/Agnes.png	Uchi
375	Charlise	https://cdn.discordapp.com/attachments/709286174879121519/710341261780844554/Charlise.png	Uchi
391	Rocket	https://cdn.discordapp.com/attachments/709286174879121519/710341380337172520/Rocket.png	Uchi
388	Phoebe	https://cdn.discordapp.com/attachments/709286174879121519/710341359998861385/Phoebe.png	Uchi
379	Flo	https://cdn.discordapp.com/attachments/709286174879121519/710341288041644052/Flo.png	Uchi
381	Fuchsia	https://cdn.discordapp.com/attachments/709286174879121519/710341296882974840/Fuchsia.png	Uchi
\.


--
-- Name: villagers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: kathynguyen
--

SELECT pg_catalog.setval('public.villagers_id_seq', 396, true);


--
-- Name: villagers villagers_pkey; Type: CONSTRAINT; Schema: public; Owner: kathynguyen
--

ALTER TABLE ONLY public.villagers
    ADD CONSTRAINT villagers_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

