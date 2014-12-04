// the author disclaims copyright to this code
module('attache.plural');

test('inflection', function() { 
	expect(7);
	// test conditional inflection
	equal( attache.plural("person", 1), "person", "1 person" );
	equal( attache.plural("person", 0), "people", "0 person" );
	equal( attache.plural("person", 2), "people", "2 person" );
	equal( attache.plural("person", 0.5), "people", "0.5 person" );
	equal( attache.plural("foot", -1), "feet", "-1 foot" );

	equal( attache.plural("chateau", 1, "chateaux"), "chateau", "1 chateau" );
	equal( attache.plural("chateau", 2, "chateaux"), "chateaux", "2 chateau" );
});

test('define', function() {
	expect(2);
	// test user-defined plurals
	attache.plural.define('emacs', 'emacsen');

	equal( attache.plural("emacs"), "emacsen", "emacs" );
	equal( attache.plural("Emacs"), "Emacsen", "Emacs" );
});

test('casing', function() {
	expect(9);
	// empty string is a special case.
	equal( attache.plural(""), "", "empty string" );

	// test single letters
	equal( attache.plural("A"), "A's", "single letter A" );
	equal( attache.plural("B"), "B's", "single letter B" );
	equal( attache.plural("C"), "C's", "single letter C" );

	// test casing
	equal( attache.plural("person"), "people", "person" );
	equal( attache.plural("Person"), "People", "Person" );
	equal( attache.plural("thing"), "things", "thing" );
	equal( attache.plural("Thing"), "Things", "Thing" );
	equal( attache.plural("IBM"), "IBMs", "IBM" );
});

test('pluralize', function() {
	expect(139);
	// test lots of known plurals (taken from
	// Wikipedia and many other sources.)
	equal( attache.plural("kiss"), "kisses", "kiss" );
	equal( attache.plural("phase"), "phases", "phase" );
	equal( attache.plural("dish"), "dishes", "dish" );
	equal( attache.plural("massage"), "massages", "massage" );
	equal( attache.plural("witch"), "witches", "witch" );
	equal( attache.plural("church"), "churches", "church" );
	equal( attache.plural("class"), "classes", "class" );
	equal( attache.plural("judge"), "judges", "judge" );
	equal( attache.plural("lap"), "laps", "lap" );
	equal( attache.plural("cat"), "cats", "cat" );
	equal( attache.plural("clock"), "clocks", "clock" );
	equal( attache.plural("cough"), "coughs", "cough" );
	equal( attache.plural("death"), "deaths", "death" );
	equal( attache.plural("boy"), "boys", "boy" );
	equal( attache.plural("girl"), "girls", "girl" );
	equal( attache.plural("chair"), "chairs", "chair" );
	equal( attache.plural("hero"), "heroes", "hero" );
	equal( attache.plural("potato"), "potatoes", "potato" );
	equal( attache.plural("volcano"), "volcanoes", "volcano" );
	equal( attache.plural("cherry"), "cherries", "cherry" );
	equal( attache.plural("lady"), "ladies", "lady" );
	equal( attache.plural("day"), "days", "day" );
	equal( attache.plural("monkey"), "monkeys", "monkey" );
	equal( attache.plural("canto"), "cantos", "canto" );
	equal( attache.plural("piano"), "pianos", "piano" );
	equal( attache.plural("portico"), "porticos", "portico" );
	equal( attache.plural("pro"), "pros", "pro" );
	equal( attache.plural("quarto"), "quartos", "quarto" );
	equal( attache.plural("kimono"), "kimonos", "kimono" );
	equal( attache.plural("bath"), "baths", "bath" );
	equal( attache.plural("mouth"), "mouths", "mouth" );
	equal( attache.plural("calf"), "calves", "calf" );
	equal( attache.plural("knife"), "knives", "knife" );
	equal( attache.plural("house"), "houses", "house" );
	equal( attache.plural("moth"), "moths", "moth" );
	equal( attache.plural("proof"), "proofs", "proof" );
	equal( attache.plural("dwarf"), "dwarfs", "dwarf" ); // !
	equal( attache.plural("hoof"), "hoofs", "hoof" );
	equal( attache.plural("roof"), "roofs", "roof" );
	equal( attache.plural("staff"), "staffs", "staff" );
	equal( attache.plural("turf"), "turfs", "turf" );
	equal( attache.plural("leaf"), "leaves", "leaf" );
	equal( attache.plural("deer"), "deer", "deer" );
	equal( attache.plural("moose"), "moose", "moose" );
	equal( attache.plural("sheep"), "sheep", "sheep" );
	equal( attache.plural("bison"), "bison", "bison" );
	equal( attache.plural("salmon"), "salmon", "salmon" );
	equal( attache.plural("pike"), "pike", "pike" );
	equal( attache.plural("trout"), "trout", "trout" );
	equal( attache.plural("fish"), "fish", "fish" );
	equal( attache.plural("blowfish"), "blowfish", "blowfish" );
	equal( attache.plural("swine"), "swine", "swine" );
	equal( attache.plural("aircraft"), "aircraft", "aircraft" );
	equal( attache.plural("blues"), "blues", "blues" );
	equal( attache.plural("ox"), "oxen", "ox" );
	equal( attache.plural("child"), "children", "child" );
	equal( attache.plural("foot"), "feet", "foot" );
	equal( attache.plural("goose"), "geese", "goose" );
	equal( attache.plural("louse"), "lice", "louse" );
	equal( attache.plural("man"), "men", "man" );
	equal( attache.plural("mouse"), "mice", "mouse" );
	equal( attache.plural("tooth"), "teeth", "tooth" );
	equal( attache.plural("woman"), "women", "woman" );
	equal( attache.plural("formula"), "formulas", "formula" );
	equal( attache.plural("encyclopedia"), "encyclopedias", "encyclopedia" );
	equal( attache.plural("index"), "indexes", "index" );
	equal( attache.plural("matrix"), "matrices", "matrix" );
	equal( attache.plural("vertex"), "vertices", "vertex" );
	equal( attache.plural("axis"), "axes", "axis" );
	equal( attache.plural("crisis"), "crises", "crisis" );
	equal( attache.plural("testis"), "testes", "testis" );
	equal( attache.plural("series"), "series", "series" );
	equal( attache.plural("species"), "species", "species" );
	equal( attache.plural("automaton"), "automatons", "automaton" );
	equal( attache.plural("criterion"), "criteria", "criterion" );
	equal( attache.plural("phenomenon"), "phenomena", "phenomenon" );
	equal( attache.plural("polyhedron"), "polyhedra", "polyhedron" );
	equal( attache.plural("addendum"), "addenda", "addendum" );
	equal( attache.plural("datum"), "data", "datum" );
	equal( attache.plural("forum"), "forums", "forum" );
	equal( attache.plural("medium"), "mediums", "medium" ); // !
	equal( attache.plural("millennium"), "millennia", "millennium" );
	equal( attache.plural("alumnus"), "alumni", "alumnus" );
	equal( attache.plural("corpus"), "corpuses", "corpus" );
	equal( attache.plural("census"), "censuses", "census" );
	equal( attache.plural("genus"), "genera", "genus" );
	equal( attache.plural("prospectus"), "prospectuses", "prospectus" );
	equal( attache.plural("syllabus"), "syllabi", "syllabus" );
	equal( attache.plural("viscus"), "viscera", "viscus" );
	equal( attache.plural("cactus"), "cactuses", "cactus" );
	equal( attache.plural("hippopotamus"), "hippopotamuses", "hippopotamus" );
	equal( attache.plural("octopus"), "octopuses", "octopus" );
	equal( attache.plural("platypus"), "platypuses", "platypus" );
	equal( attache.plural("terminus"), "terminuses", "terminus" );
	equal( attache.plural("uterus"), "uteruses", "uterus" );
	equal( attache.plural("atlas"), "atlases", "atlas" );
	equal( attache.plural("stigma"), "stigmata", "stigma" );
	equal( attache.plural("schema"), "schemas", "schema" );
	equal( attache.plural("dogma"), "dogmas", "dogma" );
	equal( attache.plural("lemma"), "lemmas", "lemma" );
	equal( attache.plural("criterion"), "criteria", "criterion" );
	equal( attache.plural("phenomenon"), "phenomena", "phenomenon" );
	equal( attache.plural("consortium"), "consortiums", "consortium" );
	equal( attache.plural("symposium"), "symposia", "symposium" );
	equal( attache.plural("diagnosis"), "diagnoses", "diagnosis" );
	equal( attache.plural("mongoose"), "mongooses", "mongoose" );
	equal( attache.plural("mouse"), "mice", "mouse" );
	equal( attache.plural("person"), "people", "person" );
	equal( attache.plural("action"), "actions", "action" );
	equal( attache.plural("definition"), "definitions", "definition" );
	equal( attache.plural("motion"), "motions", "motion" );
	equal( attache.plural("addition"), "additions", "addition" );
	equal( attache.plural("description"), "descriptions", "description" );
	equal( attache.plural("nation"), "nations", "nation" );
	equal( attache.plural("admission"), "admissions", "admission" );
	equal( attache.plural("occasion"), "occasions", "occasion" );
	equal( attache.plural("decision"), "decisions", "decision" );
	equal( attache.plural("permission"), "permissions", "permission" );
	equal( attache.plural("solution"), "solutions", "solution" );
	equal( attache.plural("camp"), "camps", "camp" );
	equal( attache.plural("common"), "commons", "common" );
	equal( attache.plural("fuse"), "fuses", "fuse" );
	equal( attache.plural("liturgist"), "liturgists", "liturgist" );
	equal( attache.plural("box"), "boxes", "box" );
	equal( attache.plural("gas"), "gases", "gas" );
	equal( attache.plural("bus"), "buses", "bus" );
	equal( attache.plural("news"), "news", "news" );
	equal( attache.plural("baby"), "babies", "baby" );
	equal( attache.plural("self"), "selves", "self" );
	equal( attache.plural("chief"), "chiefs", "chief" );
	equal( attache.plural("fife"), "fifes", "fife" );
	equal( attache.plural("mischief"), "mischiefs", "mischief" );
	equal( attache.plural("hoof"), "hoofs", "hoof" );
	equal( attache.plural("roof"), "roofs", "roof" );
	equal( attache.plural("grief"), "griefs", "grief" );
	equal( attache.plural("kerchief"), "kerchiefs", "kerchief" );
	equal( attache.plural("safe"), "safes", "safe" );
	equal( attache.plural("human"), "humans", "human" );
	equal( attache.plural("asparagus"), "asparagus", "asparagus" );
});
