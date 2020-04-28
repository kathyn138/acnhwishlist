DROP DATABASE IF EXISTS "villagerwishlist";

CREATE DATABASE "villagerwishlist";

\c "villagerwishlist"

--
-- PostgreSQL database dump
--

-- Dumped from database version 11.5
-- Dumped by pg_dump version 11.5

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

SET default_with_oids = false;

--
-- Name: villagers; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.villagers (
    id integer NOT NULL,
    name text NOT NULL,
    image text NOT NULL,
    personality text NOT NULL
);


ALTER TABLE public.villagers OWNER TO kathynguyen;

--
-- Name: villagers_id_seq; Type: SEQUENCE; Schema: public; Owner: -
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
-- Name: villagers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.villagers_id_seq OWNED BY public.villagers.id;


--
-- Name: villagers id; Type: DEFAULT; Schema: public; Owner: kathy
--

ALTER TABLE ONLY public.villagers ALTER COLUMN id SET DEFAULT nextval('public.villagers_id_seq'::regclass);


--
-- Data for Name: villagers; Type: TABLE DATA; Schema: public; Owner: -
--

COPY public.villagers (id, name, image, personality) FROM stdin;
1	Admiral	/villagers/Cranky/Admiral.png	Cranky
2	Angus	/villagers/Cranky/Angus.png	Cranky
3	Apollo	/villagers/Cranky/Apollo.png	Cranky
4	Avery	/villagers/Cranky/Avery.png	Cranky
5	Boris	/villagers/Cranky/Boris.png	Cranky
6	Boyd	/villagers/Cranky/Boyd.png	Cranky
7	Bruce	/villagers/Cranky/Bruce.png	Cranky
8	Butch	/villagers/Cranky/Butch.png	Cranky
9	Buzz	/villagers/Cranky/Buzz.png	Cranky
10	Camofrog	/villagers/Cranky/Camofrog.png	Cranky
11	Cesar	/villagers/Cranky/Cesar.png	Cranky
12	Chief	/villagers/Cranky/Chief.png	Cranky
13	Chow	/villagers/Cranky/Chow.png	Cranky
14	Croque	/villagers/Cranky/Croque.png	Cranky
15	Curt	/villagers/Cranky/Curt.png	Cranky
16	Cyd	/villagers/Cranky/Cyd.png	Cranky
17	Cyrano	/villagers/Cranky/Cyrano.png	Cranky
18	Del	/villagers/Cranky/Del.png	Cranky
19	Dobie	/villagers/Cranky/Dobie.png	Cranky
20	Elvis	/villagers/Cranky/Elvis.png	Cranky
21	Fang	/villagers/Cranky/Fang.png	Cranky
22	Frank	/villagers/Cranky/Frank.png	Cranky
23	Gaston	/villagers/Cranky/Gaston.png	Cranky
24	Gonzo	/villagers/Cranky/Gonzo.png	Cranky
25	Grizzly	/villagers/Cranky/Grizzly.png	Cranky
26	Groucho	/villagers/Cranky/Groucho.png	Cranky
27	Gruff	/villagers/Cranky/Gruff.png	Cranky
28	Hamphrey	/villagers/Cranky/Hamphrey.png	Cranky
29	Harry	/villagers/Cranky/Harry.png	Cranky
30	Hopper	/villagers/Cranky/Hopper.png	Cranky
31	Ike	/villagers/Cranky/Ike.png	Cranky
32	Kabuki	/villagers/Cranky/Kabuki.png	Cranky
33	Knox	/villagers/Cranky/Knox.png	Cranky
34	Limberg	/villagers/Cranky/Limberg.png	Cranky
35	Lobo	/villagers/Cranky/Lobo.png	Cranky
36	Monty	/villagers/Cranky/Monty.png	Cranky
37	Murphy	/villagers/Cranky/Murphy.png	Cranky
38	Octavian	/villagers/Cranky/Octavian.png	Cranky
39	Peewee	/villagers/Cranky/Peewee.png	Cranky
40	Rasher	/villagers/Cranky/Rasher.png	Cranky
41	Ricky	/villagers/Cranky/Ricky.png	Cranky
42	Rizzo	/villagers/Cranky/Rizzo.png	Cranky
43	Rocco	/villagers/Cranky/Rocco.png	Cranky
44	Rolf	/villagers/Cranky/Rolf.png	Cranky
45	Rooney	/villagers/Cranky/Rooney.png	Cranky
46	Roscoe	/villagers/Cranky/Roscoe.png	Cranky
47	Spike	/villagers/Cranky/Spike.png	Cranky
48	Static	/villagers/Cranky/Static.png	Cranky
49	T-Bone	/villagers/Cranky/T-Bone.png	Cranky
50	Tom	/villagers/Cranky/Tom.png	Cranky
51	Vic	/villagers/Cranky/Vic.png	Cranky
52	Vladimir	/villagers/Cranky/Vladimir.png	Cranky
53	Walt	/villagers/Cranky/Walt.png	Cranky
54	Wart Jr.	/villagers/Cranky/Wart Jr..png	Cranky
55	Wolfgang	/villagers/Cranky/Wolfgang.png	Cranky
56	Antonio	/villagers/Jock/Antonio.png	Jock
57	Axel	/villagers/Jock/Axel.png	Jock
58	Bam	/villagers/Jock/Bam.png	Jock
59	Biff	/villagers/Jock/Biff.png	Jock
60	Bill	/villagers/Jock/Bill.png	Jock
61	Billy	/villagers/Jock/Billy.png	Jock
62	Boone	/villagers/Jock/Boone.png	Jock
63	Boots	/villagers/Jock/Boots.png	Jock
64	Buck	/villagers/Jock/Buck.png	Jock
65	Bud	/villagers/Jock/Bud.png	Jock
66	Coach	/villagers/Jock/Coach.png	Jock
67	Cobb	/villagers/Jock/Cobb.png	Jock
68	Cousteau	/villagers/Jock/Cousteau.png	Jock
69	Curly	/villagers/Jock/Curly.png	Jock
70	Dom	/villagers/Jock/Dom.png	Jock
71	Drift	/villagers/Jock/Drift.png	Jock
72	Flip	/villagers/Jock/Flip.png	Jock
73	Frobert	/villagers/Jock/Frobert.png	Jock
74	Genji	/villagers/Jock/Genji.png	Jock
75	Goose	/villagers/Jock/Goose.png	Jock
76	Hamlet	/villagers/Jock/Hamlet.png	Jock
77	Iggly	/villagers/Jock/Iggly.png	Jock
78	Jay	/villagers/Jock/Jay.png	Jock
79	Jitters	/villagers/Jock/Jitters.png	Jock
80	Kevin	/villagers/Jock/Kevin.png	Jock
81	Kid Cat	/villagers/Jock/Kid Cat.png	Jock
82	Kody	/villagers/Jock/Kody.png	Jock
83	Leonardo	/villagers/Jock/Leonardo.png	Jock
84	Louie	/villagers/Jock/Louie.png	Jock
85	Lyman	/villagers/Jock/Lyman.png	Jock
86	Mac	/villagers/Jock/Mac.png	Jock
87	Moose	/villagers/Jock/Moose.png	Jock
88	Mott	/villagers/Jock/Mott.png	Jock
89	Peck	/villagers/Jock/Peck.png	Jock
90	Pierce	/villagers/Jock/Pierce.png	Jock
91	Poncho	/villagers/Jock/Poncho.png	Jock
92	Ribbot	/villagers/Jock/Ribbot.png	Jock
93	Roald	/villagers/Jock/Roald.png	Jock
94	Rod	/villagers/Jock/Rod.png	Jock
95	Rory	/villagers/Jock/Rory.png	Jock
96	Rowan	/villagers/Jock/Rowan.png	Jock
97	Rudy	/villagers/Jock/Rudy.png	Jock
98	Samson	/villagers/Jock/Samson.png	Jock
99	Scoot	/villagers/Jock/Scoot.png	Jock
100	Sheldon	/villagers/Jock/Sheldon.png	Jock
101	Sly	/villagers/Jock/Sly.png	Jock
102	Snake	/villagers/Jock/Snake.png	Jock
103	Sparro	/villagers/Jock/Sparro.png	Jock
104	Sprocket	/villagers/Jock/Sprocket.png	Jock
105	Sterling	/villagers/Jock/Sterling.png	Jock
106	Stinky	/villagers/Jock/Stinky.png	Jock
107	Tad	/villagers/Jock/Tad.png	Jock
108	Tank	/villagers/Jock/Tank.png	Jock
109	Teddy	/villagers/Jock/Teddy.png	Jock
110	Tybalt	/villagers/Jock/Tybalt.png	Jock
111	Al	/villagers/Lazy/Al.png	Lazy
112	Alfonso	/villagers/Lazy/Alfonso.png	Lazy
113	Anchovy	/villagers/Lazy/Anchovy.png	Lazy
114	Barold	/villagers/Lazy/Barold.png	Lazy
115	Beau	/villagers/Lazy/Beau.png	Lazy
116	Benedict	/villagers/Lazy/Benedict.png	Lazy
117	Benjamin	/villagers/Lazy/Benjamin.png	Lazy
118	Big Top	/villagers/Lazy/Big Top.png	Lazy
119	Biskit	/villagers/Lazy/Biskit.png	Lazy
120	Bob	/villagers/Lazy/Bob.png	Lazy
121	Bones	/villagers/Lazy/Bones.png	Lazy
122	Boomer	/villagers/Lazy/Boomer.png	Lazy
123	Broccolo	/villagers/Lazy/Broccolo.png	Lazy
124	Chester	/villagers/Lazy/Chester.png	Lazy
125	Claude	/villagers/Lazy/Claude.png	Lazy
126	Clay	/villagers/Lazy/Clay.png	Lazy
127	Clyde	/villagers/Lazy/Clyde.png	Lazy
128	Cole	/villagers/Lazy/Cole.png	Lazy
129	Cranston	/villagers/Lazy/Cranston.png	Lazy
130	Cube	/villagers/Lazy/Cube.png	Lazy
131	Deli	/villagers/Lazy/Deli.png	Lazy
132	Derwin	/villagers/Lazy/Derwin.png	Lazy
133	Dizzy	/villagers/Lazy/Dizzy.png	Lazy
134	Doc	/villagers/Lazy/Doc.png	Lazy
135	Drago	/villagers/Lazy/Drago.png	Lazy
136	Drake	/villagers/Lazy/Drake.png	Lazy
137	Egbert	/villagers/Lazy/Egbert.png	Lazy
138	Elmer	/villagers/Lazy/Elmer.png	Lazy
139	Erik	/villagers/Lazy/Erik.png	Lazy
140	Filbert	/villagers/Lazy/Filbert.png	Lazy
141	Hopkins	/villagers/Lazy/Hopkins.png	Lazy
142	Hornsby	/villagers/Lazy/Hornsby.png	Lazy
143	Hugh	/villagers/Lazy/Hugh.png	Lazy
144	Jacob	/villagers/Lazy/Jacob.png	Lazy
145	Jeremiah	/villagers/Lazy/Jeremiah.png	Lazy
146	Joey	/villagers/Lazy/Joey.png	Lazy
147	Lucky	/villagers/Lazy/Lucky.png	Lazy
148	Marcel	/villagers/Lazy/Marcel.png	Lazy
149	Moe	/villagers/Lazy/Moe.png	Lazy
150	Nate	/villagers/Lazy/Nate.png	Lazy
151	Ozzie	/villagers/Lazy/Ozzie.png	Lazy
152	Paolo	/villagers/Lazy/Paolo.png	Lazy
153	Papi	/villagers/Lazy/Papi.png	Lazy
154	Prince	/villagers/Lazy/Prince.png	Lazy
155	Puck	/villagers/Lazy/Puck.png	Lazy
156	Pudge	/villagers/Lazy/Pudge.png	Lazy
157	Punchy	/villagers/Lazy/Punchy.png	Lazy
158	Raddle	/villagers/Lazy/Raddle.png	Lazy
159	Rex	/villagers/Lazy/Rex.png	Lazy
160	Rodeo	/villagers/Lazy/Rodeo.png	Lazy
161	Sherb	/villagers/Lazy/Sherb.png	Lazy
162	Simon	/villagers/Lazy/Simon.png	Lazy
163	Spork	/villagers/Lazy/Spork.png	Lazy
164	Stitches	/villagers/Lazy/Stitches.png	Lazy
165	Stu	/villagers/Lazy/Stu.png	Lazy
166	Tucker	/villagers/Lazy/Tucker.png	Lazy
167	Wade	/villagers/Lazy/Wade.png	Lazy
168	Walker	/villagers/Lazy/Walker.png	Lazy
169	Weber	/villagers/Lazy/Weber.png	Lazy
170	Zucker	/villagers/Lazy/Zucker.png	Lazy
171	Alice	/villagers/Normal/Alice.png	Normal
172	Annalisa	/villagers/Normal/Annalisa.png	Normal
173	Aurora	/villagers/Normal/Aurora.png	Normal
174	Ava	/villagers/Normal/Ava.png	Normal
175	Bea	/villagers/Normal/Bea.png	Normal
176	Bertha	/villagers/Normal/Bertha.png	Normal
177	Bettina	/villagers/Normal/Bettina.png	Normal
178	Cally	/villagers/Normal/Cally.png	Normal
179	Caroline	/villagers/Normal/Caroline.png	Normal
180	Carrie	/villagers/Normal/Carrie.png	Normal
181	Celia	/villagers/Normal/Celia.png	Normal
182	Chelsea	/villagers/Normal/Chelsea.png	Normal
183	Chevre	/villagers/Normal/Chevre.png	Normal
184	Coco	/villagers/Normal/Coco.png	Normal
185	Daisy	/villagers/Normal/Daisy.png	Normal
186	Deena	/villagers/Normal/Deena.png	Normal
187	Dora	/villagers/Normal/Dora.png	Normal
188	Ellie	/villagers/Normal/Ellie.png	Normal
189	Etoile	/villagers/Normal/Etoile.png	Normal
190	Eunice	/villagers/Normal/Eunice.png	Normal
191	Fauna	/villagers/Normal/Fauna.png	Normal
192	Flurry	/villagers/Normal/Flurry.png	Normal
193	Gala	/villagers/Normal/Gala.png	Normal
194	Gayle	/villagers/Normal/Gayle.png	Normal
195	Goldie	/villagers/Normal/Goldie.png	Normal
196	Gladys	/villagers/Normal/Gladys.png	Normal
197	Jambette	/villagers/Normal/Jambette.png	Normal
198	June	/villagers/Normal/June.png	Normal
199	Kiki	/villagers/Normal/Kiki.png	Normal
200	Kitt	/villagers/Normal/Kitt.png	Normal
201	Lily	/villagers/Normal/Lily.png	Normal
202	Lolly	/villagers/Normal/Lolly.png	Normal
203	Lucy	/villagers/Normal/Lucy.png	Normal
204	Maggie	/villagers/Normal/Maggie.png	Normal
205	Maple	/villagers/Normal/Maple.png	Normal
206	Marcie	/villagers/Normal/Marcie.png	Normal
207	Margie	/villagers/Normal/Margie.png	Normal
208	Marina	/villagers/Normal/Marina.png	Normal
209	Megan	/villagers/Normal/Megan.png	Normal
210	Melba	/villagers/Normal/Melba.png	Normal
211	Merengue	/villagers/Normal/Merengue.png	Normal
212	Midge	/villagers/Normal/Midge.png	Normal
213	Mitzi	/villagers/Normal/Mitzi.png	Normal
214	Molly	/villagers/Normal/Molly.png	Normal
215	Nan	/villagers/Normal/Nan.png	Normal
216	Nana	/villagers/Normal/Nana.png	Normal
217	Norma	/villagers/Normal/Norma.png	Normal
218	Olive	/villagers/Normal/Olive.png	Normal
219	Peaches	/villagers/Normal/Peaches.png	Normal
220	Pekoe	/villagers/Normal/Pekoe.png	Normal
221	Poppy	/villagers/Normal/Poppy.png	Normal
222	Rhonda	/villagers/Normal/Rhonda.png	Normal
223	Sally	/villagers/Normal/Sally.png	Normal
224	Sandy	/villagers/Normal/Sandy.png	Normal
225	Savannah	/villagers/Normal/Savannah.png	Normal
226	Skye	/villagers/Normal/Skye.png	Normal
227	Stella	/villagers/Normal/Stella.png	Normal
228	Sydney	/villagers/Normal/Sydney.png	Normal
229	Sylvana	/villagers/Normal/Sylvana.png	Normal
230	Tia	/villagers/Normal/Tia.png	Normal
231	Vesta	/villagers/Normal/Vesta.png	Normal
232	Agent S	/villagers/Peppy/Agent S.png	Peppy
233	Anabelle	/villagers/Peppy/Anabelle.png	Peppy
234	Anicotti	/villagers/Peppy/Anicotti.png	Peppy
235	Apple	/villagers/Peppy/Apple.png	Peppy
236	Audie	/villagers/Peppy/Audie.png	Peppy
237	Bangle	/villagers/Peppy/Bangle.png	Peppy
238	Bella	/villagers/Peppy/Bella.png	Peppy
239	Bianca	/villagers/Peppy/Bianca.png	Peppy
240	Bluebear	/villagers/Peppy/Bluebear.png	Peppy
241	Bonbon	/villagers/Peppy/Bonbon.png	Peppy
242	Bubbles	/villagers/Peppy/Bubbles.png	Peppy
243	Bunnie	/villagers/Peppy/Bunnie.png	Peppy
244	Candi	/villagers/Peppy/Candi.png	Peppy
245	Carmen	/villagers/Peppy/Carmen.png	Peppy
246	Chai	/villagers/Peppy/Chai.png	Peppy
247	Cheri	/villagers/Peppy/Cheri.png	Peppy
248	Chrissy	/villagers/Peppy/Chrissy.png	Peppy
249	Cookie	/villagers/Peppy/Cookie.png	Peppy
250	Dotty	/villagers/Peppy/Dotty.png	Peppy
251	Felicity	/villagers/Peppy/Felicity.png	Peppy
252	Flora	/villagers/Peppy/Flora.png	Peppy
253	Freckles	/villagers/Peppy/Freckles.png	Peppy
254	Gabi	/villagers/Peppy/Gabi.png	Peppy
255	Ketchup	/villagers/Peppy/Ketchup.png	Peppy
256	Maddie	/villagers/Peppy/Maddie.png	Peppy
257	Merry	/villagers/Peppy/Merry.png	Peppy
258	Nibbles	/villagers/Peppy/Nibbles.png	Peppy
259	Pango	/villagers/Peppy/Pango.png	Peppy
260	Pate	/villagers/Peppy/Pate.png	Peppy
261	Patty	/villagers/Peppy/Patty.png	Peppy
262	Peanut	/villagers/Peppy/Peanut.png	Peppy
263	Peggy	/villagers/Peppy/Peggy.png	Peppy
264	Penelope	/villagers/Peppy/Penelope.png	Peppy
265	Pinky	/villagers/Peppy/Pinky.png	Peppy
266	Piper	/villagers/Peppy/Piper.png	Peppy
267	Pippy	/villagers/Peppy/Pippy.png	Peppy
268	Pompom	/villagers/Peppy/Pompom.png	Peppy
269	Puddles	/villagers/Peppy/Puddles.png	Peppy
270	Rilla	/villagers/Peppy/Rilla.png	Peppy
271	Rosie	/villagers/Peppy/Rosie.png	Peppy
272	Ruby	/villagers/Peppy/Ruby.png	Peppy
273	Sprinkle	/villagers/Peppy/Sprinkle.png	Peppy
274	Tabby	/villagers/Peppy/Tabby.png	Peppy
275	Tammi	/villagers/Peppy/Tammi.png	Peppy
276	Tangy	/villagers/Peppy/Tangy.png	Peppy
277	Truffles	/villagers/Peppy/Truffles.png	Peppy
278	Tutu	/villagers/Peppy/Tutu.png	Peppy
279	Twiggy	/villagers/Peppy/Twiggy.png	Peppy
280	Victoria	/villagers/Peppy/Victoria.png	Peppy
281	Wendy	/villagers/Peppy/Wendy.png	Peppy
282	Winnie	/villagers/Peppy/Winnie.png	Peppy
283	Beardo	/villagers/Smug/Beardo.png	Smug
284	Chadder	/villagers/Smug/Chadder.png	Smug
285	Chops	/villagers/Smug/Chops.png	Smug
286	Colton	/villagers/Smug/Colton.png	Smug
287	Curlos	/villagers/Smug/Curlos.png	Smug
288	Ed	/villagers/Smug/Ed.png	Smug
289	Eugene	/villagers/Smug/Eugene.png	Smug
290	Graham	/villagers/Smug/Graham.png	Smug
291	Hans	/villagers/Smug/Hans.png	Smug
292	Henry	/villagers/Smug/Henry.png	Smug
293	Hippeux	/villagers/Smug/Hippeux.png	Smug
294	Huck	/villagers/Smug/Huck.png	Smug
295	Jacques	/villagers/Smug/Jacques.png	Smug
296	Julian	/villagers/Smug/Julian.png	Smug
297	Keaton	/villagers/Smug/Keaton.png	Smug
298	Ken	/villagers/Smug/Ken.png	Smug
299	Kidd	/villagers/Smug/Kidd.png	Smug
300	Klaus	/villagers/Smug/Klaus.png	Smug
301	Kyle	/villagers/Smug/Kyle.png	Smug
302	Leopold	/villagers/Smug/Leopold.png	Smug
303	Lionel	/villagers/Smug/Lionel.png	Smug
304	Lopez	/villagers/Smug/Lopez.png	Smug
305	Lucha	/villagers/Smug/Lucha.png	Smug
306	Marshal	/villagers/Smug/Marshal.png	Smug
307	O'Hare	/villagers/Smug/O'Hare.png	Smug
308	Olaf	/villagers/Smug/Olaf.png	Smug
309	Phil	/villagers/Smug/Phil.png	Smug
310	Pietro	/villagers/Smug/Pietro.png	Smug
311	Quillson	/villagers/Smug/Quillson.png	Smug
312	Raymond	/villagers/Smug/Raymond.png	Smug
313	Rodney	/villagers/Smug/Rodney.png	Smug
314	Shep	/villagers/Smug/Shep.png	Smug
315	Tex	/villagers/Smug/Tex.png	Smug
316	Toby	/villagers/Smug/Toby.png	Smug
317	Zell	/villagers/Smug/Zell.png	Smug
318	Alli	/villagers/Snooty/Alli.png	Snooty
319	Amelia	/villagers/Snooty/Amelia.png	Snooty
320	Ankha	/villagers/Snooty/Ankha.png	Snooty
321	Annalise	/villagers/Snooty/Annalise.png	Snooty
322	Astrid	/villagers/Snooty/Astrid.png	Snooty
323	Baabara	/villagers/Snooty/Baabara.png	Snooty
324	Becky	/villagers/Snooty/Becky.png	Snooty
325	Bitty	/villagers/Snooty/Bitty.png	Snooty
326	Blaire	/villagers/Snooty/Blaire.png	Snooty
327	Blanche	/villagers/Snooty/Blanche.png	Snooty
328	Bree	/villagers/Snooty/Bree.png	Snooty
329	Broffina	/villagers/Snooty/Broffina.png	Snooty
330	Cashmere	/villagers/Snooty/Cashmere.png	Snooty
331	Claudia	/villagers/Snooty/Claudia.png	Snooty
332	Cleo	/villagers/Snooty/Cleo.png	Snooty
333	Diana	/villagers/Snooty/Diana.png	Snooty
334	Elise	/villagers/Snooty/Elise.png	Snooty
335	Eloise	/villagers/Snooty/Eloise.png	Snooty
336	Francine	/villagers/Snooty/Francine.png	Snooty
337	Freya	/villagers/Snooty/Freya.png	Snooty
338	Friga	/villagers/Snooty/Friga.png	Snooty
339	Gigi	/villagers/Snooty/Gigi.png	Snooty
340	Gloria	/villagers/Snooty/Gloria.png	Snooty
341	Greta	/villagers/Snooty/Greta.png	Snooty
342	Gwen	/villagers/Snooty/Gwen.png	Snooty
343	Judy	/villagers/Snooty/Judy.png	Snooty
344	Julia	/villagers/Snooty/Julia.png	Snooty
345	Kitty	/villagers/Snooty/Kitty.png	Snooty
346	Maelle	/villagers/Snooty/Maelle.png	Snooty
347	Mallary	/villagers/Snooty/Mallary.png	Snooty
348	Mathilda	/villagers/Snooty/Mathilda.png	Snooty
349	Mint	/villagers/Snooty/Mint.png	Snooty
350	Miranda	/villagers/Snooty/Miranda.png	Snooty
351	Monique	/villagers/Snooty/Monique.png	Snooty
352	Naomi	/villagers/Snooty/Naomi.png	Snooty
353	Olivia	/villagers/Snooty/Olivia.png	Snooty
354	Opal	/villagers/Snooty/Opal.png	Snooty
355	Pancetti	/villagers/Snooty/Pancetti.png	Snooty
356	Pecan	/villagers/Snooty/Pecan.png	Snooty
357	Portia	/villagers/Snooty/Portia.png	Snooty
358	Purrl	/villagers/Snooty/Purrl.png	Snooty
359	Queenie	/villagers/Snooty/Queenie.png	Snooty
360	Robin	/villagers/Snooty/Robin.png	Snooty
361	Snooty	/villagers/Snooty/Snooty.png	Snooty
362	Soleil	/villagers/Snooty/Soleil.png	Snooty
363	Tasha	/villagers/Snooty/Tasha.png	Snooty
364	Tiffany	/villagers/Snooty/Tiffany.png	Snooty
365	Timbra	/villagers/Snooty/Timbra.png	Snooty
366	Tipper	/villagers/Snooty/Tipper.png	Snooty
367	Velma	/villagers/Snooty/Velma.png	Snooty
368	Violet	/villagers/Snooty/Violet.png	Snooty
369	Vivian	/villagers/Snooty/Vivian.png	Snooty
370	Whitney	/villagers/Snooty/Whitney.png	Snooty
371	Willow	/villagers/Snooty/Willow.png	Snooty
372	Yuka	/villagers/Snooty/Yuka.png	Snooty
373	Agnes	/villagers/Uchi/Agnes.png	Uchi
374	Canberra	/villagers/Uchi/Canberra.png	Uchi
375	Charlise	/villagers/Uchi/Charlise.png	Uchi
376	Cherry	/villagers/Uchi/Cherry.png	Uchi
377	Deirdre	/villagers/Uchi/Deirdre.png	Uchi
378	Diva	/villagers/Uchi/Diva.png	Uchi
379	Flo	/villagers/Uchi/Flo.png	Uchi
380	Frita	/villagers/Uchi/Frita.png	Uchi
381	Fuchsia	/villagers/Uchi/Fuchsia.png	Uchi
382	Hazel	/villagers/Uchi/Hazel.png	Uchi
383	Katt	/villagers/Uchi/Katt.png	Uchi
384	Mira	/villagers/Uchi/Mira.png	Uchi
385	Muffy	/villagers/Uchi/Muffy.png	Uchi
386	Pashmina	/villagers/Uchi/Pashmina.png	Uchi
387	Paula	/villagers/Uchi/Paula.png	Uchi
388	Phoebe	/villagers/Uchi/Phoebe.png	Uchi
389	Plucky	/villagers/Uchi/Plucky.png	Uchi
390	Renee	/villagers/Uchi/Renee.png	Uchi
391	Rocket	/villagers/Uchi/Rocket.png	Uchi
392	Reneigh	/villagers/Uchi/Reneigh.png	Uchi
393	Shari	/villagers/Uchi/Shari.png	Uchi
394	Sylvia	/villagers/Uchi/Sylvia.png	Uchi
395	Tammy	/villagers/Uchi/Tammy.png	Uchi
396	Ursala	/villagers/Uchi/Ursala.png	Uchi
\.


--
-- Name: villagers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.villagers_id_seq', 396, true);


--
-- Name: villagers villagers_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.villagers
    ADD CONSTRAINT villagers_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

