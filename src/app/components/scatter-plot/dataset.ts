export interface Entry {
  time: string;
  place: number;
  seconds: number;
  name: string;
  year: Date;
  nationality: string;
  doping?: string;
  URL?: string;
}


export const DATASET: Entry[] =
  [
    {
      time: '36:50',
      place: 1,
      seconds: 2210,
      name: 'Marco Pantani',
      year: new Date('1995'),
      nationality: 'ITA',
      doping: 'Alleged drug use during 1995 due to high hematocrit levels',
      URL: 'https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use'
    },
    {
      time: '36:55',
      place: 2,
      seconds: 2215,
      name: 'Marco Pantani',
      year: new Date('1997'),
      nationality: 'ITA',
      doping: 'Alleged drug use during 1997 due to high hermatocrit levels',
      URL: 'https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use'
    },
    {
      time: '37:15',
      place: 3,
      seconds: 2235,
      name: 'Marco Pantani',
      year: new Date('1994'),
      nationality: 'ITA',
      doping: 'Alleged drug use during 1994 due to high hermatocrit levels',
      URL: 'https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use'
    },
    {
      time: '37:36',
      place: 4,
      seconds: 2256,
      name: 'Lance Armstrong',
      year: new Date('2004'),
      nationality: 'USA',
      doping: '2004 Tour de France title stripped by UCI in 2012',
      URL: 'https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations'
    },
    {
      time: '37:42',
      place: 5,
      seconds: 2262,
      name: 'Jan Ullrich',
      year: new Date('1997'),
      nationality: 'GER',
      doping: 'Confessed later in his career to doping',
      URL: 'https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case'
    },
    {
      time: '38:05',
      place: 6,
      seconds: 2285,
      name: 'Lance Armstrong',
      year: new Date('2001'),
      nationality: 'USA',
      doping: '2001 Tour de France title stripped by UCI in 2012',
      URL: 'https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations'
    },
    {
      time: '38:14',
      place: 7,
      seconds: 2294,
      name: 'Miguel Indurain',
      year: new Date('1995'),
      nationality: 'ESP',
      doping: '1994 Failed test for salbutemol, not a banned drug at that time',
      URL: 'http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html'
    },
    {
      time: '38:14',
      place: 8,
      seconds: 2294,
      name: 'Alex Zülle',
      year: new Date('1995'),
      nationality: 'SUI',
      doping: 'Confessed in 1998 to taking EPO',
      URL: 'https://en.wikipedia.org/wiki/Alex_Z%C3%BClle#Festina_affair'
    },
    {
      time: '38:16',
      place: 9,
      seconds: 2296,
      name: 'Bjarne Riis',
      year: new Date('1995'),
      nationality: 'DEN',
      doping: 'Alleged drug use during 1995 due to high hermatrocite levels',
      URL: 'https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations'
    },
    {
      time: '38:22',
      place: 10,
      seconds: 2302,
      name: 'Richard Virenque',
      year: new Date('1997'),
      nationality: 'FRA',
      doping: 'In 2000 confessed to doping during his career',
      URL: 'https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair'
    },
    {
      time: '38:36',
      place: 11,
      seconds: 2316,
      name: 'Floyd Landis',
      year: new Date('2006'),
      nationality: 'USA',
      doping: 'Stripped of 2006 Tour de France title',
      URL: 'https://en.wikipedia.org/wiki/Floyd_Landis_doping_case'
    },
    {
      time: '38:36',
      place: 12,
      seconds: 2316,
      name: 'Andreas Klöden',
      year: new Date('2006'),
      nationality: 'GER',
      doping: 'Alleged use of illegal blood transfusions in 2006',
      URL: 'https://en.wikipedia.org/wiki/Andreas_Kl%C3%B6den#2009_Doping_allegations'
    },
    {
      time: '38:40',
      place: 13,
      seconds: 2320,
      name: 'Jan Ullrich',
      year: new Date('2004'),
      nationality: 'GER',
      doping: 'Confessed later in his career to doping',
      URL: 'https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case'
    },
    {
      time: '38:44',
      place: 14,
      seconds: 2324,
      name: 'Laurent Madouas',
      year: new Date('1995'),
      nationality: 'FRA',
      doping: 'Tested positive for Salbutemol in 1994, suspended for 1 month',
      URL: 'http://www.dopeology.org/incidents/Madouas-positive/'
    },
    {
      time: '38:55',
      place: 15,
      seconds: 2335,
      name: 'Richard Virenque',
      year: new Date('1994'),
      nationality: 'FRA',
      doping: 'In 2000 confessed to doping during his career',
      URL: 'https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair'
    },
    {
      time: '39:01',
      place: 16,
      seconds: 2341,
      name: 'Carlos Sastre',
      year: new Date('2006'),
      nationality: 'ESP',
      doping: '',
      URL: ''
    },
    {
      time: '39:09',
      place: 17,
      seconds: 2349,
      name: 'Iban Mayo',
      year: new Date('2003'),
      nationality: 'ESP',
      doping: 'Failed doping test in 2007 Tour de France',
      URL: 'https://en.wikipedia.org/wiki/Iban_Mayo'
    },
    {
      time: '39:12',
      place: 18,
      seconds: 2352,
      name: 'Andreas Klöden',
      year: new Date('2004'),
      nationality: 'GER',
      doping: 'Alleged doping during 2006 Tour de France',
      URL: 'https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case'
    },
    {
      time: '39:14',
      place: 19,
      seconds: 2354,
      name: 'Jose Azevedo',
      year: new Date('2004'),
      nationality: 'POR',
      doping: 'Implicated in the Operación Puerto doping case',
      URL: 'https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case'
    },
    {
      time: '39:15',
      place: 20,
      seconds: 2355,
      name: 'Levi Leipheimer',
      year: new Date('2006'),
      nationality: 'USA',
      doping: 'Testified in 2012 to doping during his time with US Postal Service ',
      URL: 'http://www.wsj.com/articles/SB10000872396390444799904578048352672452328'
    },
    {
      time: '39:22',
      place: 21,
      seconds: 2362,
      name: 'Francesco Casagrande',
      year: new Date('1997'),
      nationality: 'ITA',
      doping: 'Positive testosterone test in 1998',
      URL: 'http://autobus.cyclingnews.com/results/1998/sep98/sep2.shtml'
    },
    {
      time: '39:23',
      place: 22,
      seconds: 2363,
      name: 'Nairo Quintana',
      year: new Date('2015'),
      nationality: 'COL',
      doping: '',
      URL: ''
    },
    {
      time: '39:23',
      place: 23,
      seconds: 2363,
      name: 'Bjarne Riis',
      year: new Date('1997'),
      nationality: 'DEN',
      doping: 'Alleged drug use during 1995 due to high hermatrocite levels',
      URL: 'https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations'
    },
    {
      time: '39:30',
      place: 24,
      seconds: 2370,
      name: 'Miguel Indurain',
      year: new Date('1994'),
      nationality: 'ESP',
      doping: '1994 Failed test for salbutemol, not a banned drug at that time',
      URL: 'http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html'
    },
    {
      time: '39:30',
      place: 25,
      seconds: 2370,
      name: 'Luc Leblanc',
      year: new Date('1994'),
      nationality: 'FRA',
      doping: 'Admitted to using epo and amphetimines throughout 1994 ',
      URL: 'http://www.dopeology.org/people/Luc_Leblanc/'
    },
    {
      time: '39:32',
      place: 26,
      seconds: 2372,
      name: 'Carlos Sastre',
      year: new Date('2008'),
      nationality: 'ESP',
      doping: '',
      URL: ''
    },
    {
      time: '39:37',
      place: 27,
      seconds: 2377,
      name: 'Vladimir Poulnikov',
      year: new Date('1994'),
      nationality: 'UKR',
      doping: '',
      URL: ''
    },
    {
      time: '39:40',
      place: 28,
      seconds: 2380,
      name: 'Giuseppe Guerini',
      year: new Date('2004'),
      nationality: 'ITA',
      doping: '',
      URL: ''
    },
    {
      time: '39:41',
      place: 29,
      seconds: 2381,
      name: 'Santos Gonzalez',
      year: new Date('2004'),
      nationality: 'ESP',
      doping: 'High Hematocrit during 2005 season, removed by team management',
      URL: 'http://www.cyclingnews.com/news/santos-gonzalez-sacked-by-phonak/'
    },
    {
      time: '39:41',
      place: 30,
      seconds: 2381,
      name: 'Vladimir Karpets',
      year: new Date('2004'),
      nationality: 'RUS',
      doping: 'Made payments to Ferrari, but no charges filed',
      URL: 'http://www.dopeology.org/incidents/Ferrari-investigation/'
    },
    {
      time: '39:45',
      place: 31,
      seconds: 2385,
      name: 'Fernando Escartin',
      year: new Date('1995'),
      nationality: 'ESP',
      doping: 'Implicated in Giardini Margherita Raid in 1998 as a \'victim\' ',
      URL: 'http://www.dopeology.org/incidents/Giardini-Margherita-raid-%5bBologna%5d/'
    },
    {
      time: '39:47',
      place: 32,
      seconds: 2387,
      name: 'Denis Menchov',
      year: new Date('2006'),
      nationality: 'RUS',
      doping: '',
      URL: ''
    },
    {
      time: '39:47',
      place: 33,
      seconds: 2387,
      name: 'Michael Rasmussen',
      year: new Date('2006'),
      nationality: 'DEN',
      doping: 'Admitted to doping with multiple substances 1998-2010',
      URL: 'http://www.dopeology.org/people/Michael_Rasmussen/'
    },
    {
      time: '39:47',
      place: 34,
      seconds: 2387,
      name: 'Pietro Caucchioli',
      year: new Date('2006'),
      nationality: 'ITA',
      doping: 'Associated with Mantova investigation, charges dropped',
      URL: 'http://www.cyclingnews.com/news/italian-judge-set-to-decide-if-32-named-in-mantova-doping-investigation-should-go-on-trial/'
    },
    {
      time: '39:50',
      place: 35,
      seconds: 2390,
      name: 'Nairo Quintana',
      year: new Date('2013'),
      nationality: 'COL',
      doping: '',
      URL: ''
    }
  ];
