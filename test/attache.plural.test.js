// the author disclaims copyright to this code
module('attache.plural');

test('inflection', function() { 
	expect(7);
	// test conditional inflection
	equals( attache.plural("person", 1), "person", "1 person" );
	equals( attache.plural("person", 0), "people", "0 person" );
	equals( attache.plural("person", 2), "people", "2 person" );
	equals( attache.plural("person", 0.5), "people", "0.5 person" );
	equals( attache.plural("foot", -1), "feet", "-1 foot" );

	equals( attache.plural("chateau", 1, "chateaux"), "chateau", "1 chateau" );
	equals( attache.plural("chateau", 2, "chateaux"), "chateaux", "2 chateau" );
});

test('define', function() {
	expect(2);
	// test user-defined plurals
	attache.plural.define('emacs', 'emacsen');

	equals( attache.plural("emacs"), "emacsen", "emacs" );
	equals( attache.plural("Emacs"), "Emacsen", "Emacs" );
});

test('casing', function() {
	expect(9);
	// empty string is a special case.
	equals( attache.plural(""), "", "empty string" );

	// test single letters
	equals( attache.plural("A"), "A's", "single letter A" );
	equals( attache.plural("B"), "B's", "single letter B" );
	equals( attache.plural("C"), "C's", "single letter C" );

	// test casing
	equals( attache.plural("person"), "people", "person" );
	equals( attache.plural("Person"), "People", "Person" );
	equals( attache.plural("thing"), "things", "thing" );
	equals( attache.plural("Thing"), "Things", "Thing" );
	equals( attache.plural("IBM"), "IBMs", "IBM" );
});

test('pluralize', function() {
	expect(138);
	// test lots of known plurals (taken from
	// Wikipedia and many other sources.)
	equals( attache.plural("kiss"), "kisses", "kiss" );
	equals( attache.plural("phase"), "phases", "phase" );
	equals( attache.plural("dish"), "dishes", "dish" );
	equals( attache.plural("massage"), "massages", "massage" );
	equals( attache.plural("witch"), "witches", "witch" );
	equals( attache.plural("church"), "churches", "church" );
	equals( attache.plural("class"), "classes", "class" );
	equals( attache.plural("judge"), "judges", "judge" );
	equals( attache.plural("lap"), "laps", "lap" );
	equals( attache.plural("cat"), "cats", "cat" );
	equals( attache.plural("clock"), "clocks", "clock" );
	equals( attache.plural("cough"), "coughs", "cough" );
	equals( attache.plural("death"), "deaths", "death" );
	equals( attache.plural("boy"), "boys", "boy" );
	equals( attache.plural("girl"), "girls", "girl" );
	equals( attache.plural("chair"), "chairs", "chair" );
	equals( attache.plural("hero"), "heroes", "hero" );
	equals( attache.plural("potato"), "potatoes", "potato" );
	equals( attache.plural("volcano"), "volcanoes", "volcano" );
	equals( attache.plural("cherry"), "cherries", "cherry" );
	equals( attache.plural("lady"), "ladies", "lady" );
	equals( attache.plural("day"), "days", "day" );
	equals( attache.plural("monkey"), "monkeys", "monkey" );
	equals( attache.plural("canto"), "cantos", "canto" );
	equals( attache.plural("piano"), "pianos", "piano" );
	equals( attache.plural("portico"), "porticos", "portico" );
	equals( attache.plural("pro"), "pros", "pro" );
	equals( attache.plural("quarto"), "quartos", "quarto" );
	equals( attache.plural("kimono"), "kimonos", "kimono" );
	equals( attache.plural("bath"), "baths", "bath" );
	equals( attache.plural("mouth"), "mouths", "mouth" );
	equals( attache.plural("calf"), "calves", "calf" );
	equals( attache.plural("knife"), "knives", "knife" );
	equals( attache.plural("house"), "houses", "house" );
	equals( attache.plural("moth"), "moths", "moth" );
	equals( attache.plural("proof"), "proofs", "proof" );
	equals( attache.plural("dwarf"), "dwarfs", "dwarf" ); // !
	equals( attache.plural("hoof"), "hoofs", "hoof" );
	equals( attache.plural("roof"), "roofs", "roof" );
	equals( attache.plural("staff"), "staffs", "staff" );
	equals( attache.plural("turf"), "turfs", "turf" );
	equals( attache.plural("leaf"), "leaves", "leaf" );
	equals( attache.plural("deer"), "deer", "deer" );
	equals( attache.plural("moose"), "moose", "moose" );
	equals( attache.plural("sheep"), "sheep", "sheep" );
	equals( attache.plural("bison"), "bison", "bison" );
	equals( attache.plural("salmon"), "salmon", "salmon" );
	equals( attache.plural("pike"), "pike", "pike" );
	equals( attache.plural("trout"), "trout", "trout" );
	equals( attache.plural("fish"), "fish", "fish" );
	equals( attache.plural("blowfish"), "blowfish", "blowfish" );
	equals( attache.plural("swine"), "swine", "swine" );
	equals( attache.plural("aircraft"), "aircraft", "aircraft" );
	equals( attache.plural("blues"), "blues", "blues" );
	equals( attache.plural("ox"), "oxen", "ox" );
	equals( attache.plural("child"), "children", "child" );
	equals( attache.plural("foot"), "feet", "foot" );
	equals( attache.plural("goose"), "geese", "goose" );
	equals( attache.plural("louse"), "lice", "louse" );
	equals( attache.plural("man"), "men", "man" );
	equals( attache.plural("mouse"), "mice", "mouse" );
	equals( attache.plural("tooth"), "teeth", "tooth" );
	equals( attache.plural("woman"), "women", "woman" );
	equals( attache.plural("formula"), "formulas", "formula" );
	equals( attache.plural("encyclopedia"), "encyclopedias", "encyclopedia" );
	equals( attache.plural("index"), "indexes", "index" );
	equals( attache.plural("matrix"), "matrices", "matrix" );
	equals( attache.plural("vertex"), "vertices", "vertex" );
	equals( attache.plural("axis"), "axes", "axis" );
	equals( attache.plural("crisis"), "crises", "crisis" );
	equals( attache.plural("testis"), "testes", "testis" );
	equals( attache.plural("series"), "series", "series" );
	equals( attache.plural("species"), "species", "species" );
	equals( attache.plural("automaton"), "automatons", "automaton" );
	equals( attache.plural("criterion"), "criteria", "criterion" );
	equals( attache.plural("phenomenon"), "phenomena", "phenomenon" );
	equals( attache.plural("polyhedron"), "polyhedra", "polyhedron" );
	equals( attache.plural("addendum"), "addenda", "addendum" );
	equals( attache.plural("datum"), "data", "datum" );
	equals( attache.plural("forum"), "forums", "forum" );
	equals( attache.plural("medium"), "mediums", "medium" ); // !
	equals( attache.plural("millennium"), "millennia", "millennium" );
	equals( attache.plural("alumnus"), "alumni", "alumnus" );
	equals( attache.plural("corpus"), "corpuses", "corpus" );
	equals( attache.plural("census"), "censuses", "census" );
	equals( attache.plural("genus"), "genera", "genus" );
	equals( attache.plural("prospectus"), "prospectuses", "prospectus" );
	equals( attache.plural("syllabus"), "syllabi", "syllabus" );
	equals( attache.plural("viscus"), "viscera", "viscus" );
	equals( attache.plural("cactus"), "cactuses", "cactus" );
	equals( attache.plural("hippopotamus"), "hippopotamuses", "hippopotamus" );
	equals( attache.plural("octopus"), "octopuses", "octopus" );
	equals( attache.plural("platypus"), "platypuses", "platypus" );
	equals( attache.plural("terminus"), "terminuses", "terminus" );
	equals( attache.plural("uterus"), "uteruses", "uterus" );
	equals( attache.plural("atlas"), "atlases", "atlas" );
	equals( attache.plural("stigma"), "stigmata", "stigma" );
	equals( attache.plural("schema"), "schemas", "schema" );
	equals( attache.plural("dogma"), "dogmas", "dogma" );
	equals( attache.plural("lemma"), "lemmas", "lemma" );
	equals( attache.plural("criterion"), "criteria", "criterion" );
	equals( attache.plural("phenomenon"), "phenomena", "phenomenon" );
	equals( attache.plural("consortium"), "consortiums", "consortium" );
	equals( attache.plural("symposium"), "symposia", "symposium" );
	equals( attache.plural("diagnosis"), "diagnoses", "diagnosis" );
	equals( attache.plural("mongoose"), "mongooses", "mongoose" );
	equals( attache.plural("mouse"), "mice", "mouse" );
	equals( attache.plural("person"), "people", "person" );
	equals( attache.plural("action"), "actions", "action" );
	equals( attache.plural("definition"), "definitions", "definition" );
	equals( attache.plural("motion"), "motions", "motion" );
	equals( attache.plural("addition"), "additions", "addition" );
	equals( attache.plural("description"), "descriptions", "description" );
	equals( attache.plural("nation"), "nations", "nation" );
	equals( attache.plural("admission"), "admissions", "admission" );
	equals( attache.plural("occasion"), "occasions", "occasion" );
	equals( attache.plural("decision"), "decisions", "decision" );
	equals( attache.plural("permission"), "permissions", "permission" );
	equals( attache.plural("solution"), "solutions", "solution" );
	equals( attache.plural("camp"), "camps", "camp" );
	equals( attache.plural("common"), "commons", "common" );
	equals( attache.plural("fuse"), "fuses", "fuse" );
	equals( attache.plural("liturgist"), "liturgists", "liturgist" );
	equals( attache.plural("box"), "boxes", "box" );
	equals( attache.plural("gas"), "gases", "gas" );
	equals( attache.plural("bus"), "buses", "bus" );
	equals( attache.plural("news"), "news", "news" );
	equals( attache.plural("baby"), "babies", "baby" );
	equals( attache.plural("self"), "selves", "self" );
	equals( attache.plural("chief"), "chiefs", "chief" );
	equals( attache.plural("fife"), "fifes", "fife" );
	equals( attache.plural("mischief"), "mischiefs", "mischief" );
	equals( attache.plural("hoof"), "hoofs", "hoof" );
	equals( attache.plural("roof"), "roofs", "roof" );
	equals( attache.plural("grief"), "griefs", "grief" );
	equals( attache.plural("kerchief"), "kerchiefs", "kerchief" );
	equals( attache.plural("safe"), "safes", "safe" );
	equals( attache.plural("human"), "humans", "human" );
});
