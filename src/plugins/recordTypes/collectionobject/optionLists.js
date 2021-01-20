import { defineMessages } from 'react-intl';

export default {
  nameTypes: {
    values: [
      'classified',
      'denomination',
      'questionable',
      'simple',
      'taxonomic',
      'typological',
    ],
  },
  nagpraInventories: {
    values: [
      'notOnAnInventory',
      'akAlaska',
      'akAlaskaNative',
      'akChugach',
      'azApacheCounty',
      'azCochiti',
      'azCoconinoCounty',
      'azHopi',
      'azNavajo',
      'azNavajoCounty1',
      'azNavajoCounty2',
      'azPimaQuechan',
      'azWestArizona',
      'caUsa1',
      'caUsa2',
      'caUsa3',
      'caAlamedaCounty1',
      'caAlamedaCounty2',
      'caAlamedaCounty3',
      'caAlamedaCounty4',
      'caAla309',
      'caAmadorCounty',
      'caButteCounty',
      'caCahuilla2',
      'caCahuillaCupenoDiegueno',
      'caCalaverasCounty',
      'caChumash',
      'caChumash2',
      'caColusaCounty1',
      'caColusaCounty2',
      'caContraCostaCounty1',
      'caContraCostaCounty2',
      'caContraCostaCounty3',
      'caContraCostaCounty4',
      'caContraCostaCounty5',
      'caContraCostaCounty6',
      'caCco138',
      'caCco141',
      'caCupeno',
      'caDelNorteCounty',
      'caElDoradoCounty',
      'caFoothillYokutsMonache1',
      'caFoothillYokutsMonache2',
      'caFresnoCounty1',
      'caFresnoCounty2',
      'caFresnoCounty3',
      'caGlennCounty',
      'caHumboldtCounty1',
      'caHumboldtCounty2',
      'caHumboldtCounty3',
      'caInyoCounty1',
      'caInyoCounty2',
      'caKarok',
      'caKer-74',
      'caKernCounty1',
      'caKernCounty2',
      'caKernCounty3',
      'caKingsCounty',
      'caKonkow',
      'caLakeCounty',
      'caLassenCounty1',
      'caLassenCounty2',
      'caLassenCounty3',
      'caLosAngelesCounty1',
      'caLosAngelesCounty2',
      'caMaderaCounty1',
      'caMaderaCounty2',
      'caMarinCounty1',
      'caMarinCounty2',
      'caMariposaCounty',
      'caMendocino',
      'caMercedCounty',
      'caModocCounty1',
      'caModocCounty2',
      'caMonoCounty',
      'caMontereyCountyOh1',
      'caMontereyCountyOh2',
      'caMontereyCounty1',
      'caMontereyCounty2',
      'caMontereyCounty3',
      'caNapaCounty1',
      'caNapaCounty2',
      'caNapaCounty3',
      'caOrangeCounty',
      'caPatwin1',
      'caPatwin2',
      'caPitRiver',
      'caPlacerCounty',
      'caPlumasCounty',
      'caPomo1',
      'caPomo2',
      'caPomo3',
      'caSac160',
      'caSacramentoCounty1',
      'caSacramentoCounty2',
      'caSacramentoCounty3',
      'caSacramentoCounty4',
      'caSac16revised',
      'caSanBenitoCounty',
      'caSanClementeIsland',
      'caSanDiego',
      'caSanFranciscoOh1',
      'caSanFranciscoOh2',
      'caSanFranciscoCounty1',
      'caSanJoaquinCounty1',
      'caSanJoaquinCounty2',
      'caSanJoaquinCounty5',
      'caSanLuisObispoCounty1',
      'caSanLuisObispoCounty2',
      'caSanMateoCo',
      'caSanMateoCounty1',
      'caSanNicolasIsland',
      'caSanPasqual',
      'caSantaCatalinaIsland1',
      'caSantaCatalinaIsland2',
      'caSantaClaraCountyOh1',
      'caSantaClaraCountyOh2',
      'caSantaClaraCounty1',
      'caSantaClaraCounty2',
      'caSantaCruzCountyOh1',
      'caSantaCruzCounty1',
      'caSantaCruzCounty2',
      'caShastaCounty1',
      'caShastaCounty2',
      'caShastaCounty3',
      'caSierraMiwok',
      'caSis262',
      'caSiskiyouCounty1',
      'caSiskiyouCounty2',
      'caSolanoCounty1',
      'caSolanoCounty2',
      'caSolanoCounty3',
      'caSonomaCounty',
      'caSouthernValleyYokuts',
      'caStanislausCounty1',
      'caStanislausCounty2',
      'caSutterCounty1',
      'caSutterCounty2',
      'caTehamaCounty1',
      'caTehamaCounty2',
      'caTeh58',
      'caTrinityCounty1',
      'caTrinityCounty2',
      'caTulareCounty1',
      'caTulareCounty2',
      'caTulareCounty3',
      'caTulareCounty4',
      'caTulareCounty5',
      'caWesternShoshone',
      'caWintun',
      'caWiyot',
      'caYana',
      'caYol13',
      'caYoloCounty1',
      'caYoloCounty2',
      'caYoloCounty3',
      'caYubaCounty',
      'caYub5',
      'caYuki',
      'caYurok',
      'coMontezumaCounty',
      'idLemhiCounty',
      'ilMadisonCounty',
      'inIndiana',
      'lamarHistoric',
      'miMichigan',
      'ndMandan',
      'njNewJersey',
      'nmMckinleyCounty',
      'nvChurchillCounty',
      'nvClarkCounty1',
      'nvClarkCounty2',
      'nvHumboldtCounty',
      'nvNevada',
      'nvNorthernPaiute',
      'nvPershingCounty',
      'nvSouthernPaiute',
      'nvWashoe',
      'nvWashoeCounty1',
      'nvWashoeCounty2',
      'nyNewYork',
      'orCalapooya',
      'orChetco',
      'orJacksonCounty',
      'orKlamath',
      'orKlamathCounty',
      'orMorrowCounty',
      'orWascoCounty',
      'sdBrownCounty',
      'tnMontgomeryCounty',
      'utBoxElderCounty',
      'utSanJuanCounty1',
      'utSanJuanCounty2',
      'waAsotinCounty',
      'waClallam',
      'waCowlitzCounty',
      'waKing',
      'waKlickitatCounty',
      'waKl24245kl242',
      'waMillersIsland',
      'waYakima',
      'nonNagpra1',
      'nonNagpra2',
      'nonNagpra3',
      'nonNagpra4',
      'nonNagpra5',
      'nonNagpra6',
      'nonNagpra7',
      'nonNagpra8',
      'nonNagpra9',
      'nonNagpra10',
      'nonNagpra11',
      'unknown',
    ],
    messages: defineMessages({
      notOnAnInventory: {
        id: 'option.nagpraInventories.notOnAnInventory',
        defaultMessage: 'not on an inventory',
      },
      akAlaska: {
        id: 'option.nagpraInventories.akAlaska',
        defaultMessage: 'AK-Alaska',
      },
      akAlaskaNative: {
        id: 'option.nagpraInventories.akAlaskaNative',
        defaultMessage: 'AK-Alaska Native',
      },
      akChugach: {
        id: 'option.nagpraInventories.akChugach',
        defaultMessage: 'AK-Chugach',
      },
      azApacheCounty: {
        id: 'option.nagpraInventories.azApacheCounty',
        defaultMessage: 'AZ-Apache Co.',
      },
      azCochiti: {
        id: 'option.nagpraInventories.azCochiti',
        defaultMessage: 'AZ-Cochiti',
      },
      azCoconinoCounty: {
        id: 'option.nagpraInventories.azCoconinoCounty',
        defaultMessage: 'AZ-Coconino Co.',
      },
      azHopi: {
        id: 'option.nagpraInventories.azHopi',
        defaultMessage: 'AZ-Hopi',
      },
      azNavajo: {
        id: 'option.nagpraInventories.azNavajo',
        defaultMessage: 'AZ-Navajo',
      },
      azNavajoCounty1: {
        id: 'option.nagpraInventories.azNavajoCounty1',
        defaultMessage: 'AZ-Navajo Co. 1',
      },
      azNavajoCounty2: {
        id: 'option.nagpraInventories.azNavajoCounty2',
        defaultMessage: 'AZ-Navajo Co. 2',
      },
      azPimaQuechan: {
        id: 'option.nagpraInventories.azPimaQuechan',
        defaultMessage: 'AZ-Pima, Quechan',
      },
      azWestArizona: {
        id: 'option.nagpraInventories.azWestArizona',
        defaultMessage: 'AZ-West Arizona',
      },
      caUsa1: {
        id: 'option.nagpraInventories.caUsa1',
        defaultMessage: 'CA/USA 1',
      },
      caUsa2: {
        id: 'option.nagpraInventories.caUsa2',
        defaultMessage: 'CA/USA 2',
      },
      caUsa3: {
        id: 'option.nagpraInventories.caUsa3',
        defaultMessage: 'CA/USA 3',
      },
      caAlamedaCounty1: {
        id: 'option.nagpraInventories.caAlamedaCounty1',
        defaultMessage: 'CA-Alameda Co. 1',
      },
      caAlamedaCounty2: {
        id: 'option.nagpraInventories.caAlamedaCounty2',
        defaultMessage: 'CA-Alameda Co. 2',
      },
      caAlamedaCounty3: {
        id: 'option.nagpraInventories.caAlamedaCounty3',
        defaultMessage: 'CA-Alameda Co. 3',
      },
      caAlamedaCounty4: {
        id: 'option.nagpraInventories.caAlamedaCounty4',
        defaultMessage: 'CA-Alameda Co. 4',
      },
      caAla309: {
        id: 'option.nagpraInventories.caAla309',
        defaultMessage: 'CA-Ala-309',
      },
      caAmadorCounty: {
        id: 'option.nagpraInventories.caAmadorCounty',
        defaultMessage: 'CA-Amador Co.',
      },
      caButteCounty: {
        id: 'option.nagpraInventories.caButteCounty',
        defaultMessage: 'CA-Butte Co.',
      },
      caCahuilla2: {
        id: 'option.nagpraInventories.caCahuilla2',
        defaultMessage: 'CA-Cahuilla 2',
      },
      caCahuillaCupenoDiegueno: {
        id: 'option.nagpraInventories.caCahuillaCupenoDiegueno',
        defaultMessage: 'CA-Cahuilla, Cupeño, Diegueño',
      },
      caCalaverasCounty: {
        id: 'option.nagpraInventories.caCalaverasCounty',
        defaultMessage: 'CA-Calaveras Co.',
      },
      caChumash: {
        id: 'option.nagpraInventories.caChumash',
        defaultMessage: 'CA-Chumash',
      },
      caChumash2: {
        id: 'option.nagpraInventories.caChumash2',
        defaultMessage: 'CA-Chumash 2',
      },
      caColusaCounty1: {
        id: 'option.nagpraInventories.caColusaCounty1',
        defaultMessage: 'CA-Colusa Co. 1',
      },
      caColusaCounty2: {
        id: 'option.nagpraInventories.caColusaCounty2',
        defaultMessage: 'CA-Colusa Co. 2',
      },
      caContraCostaCounty1: {
        id: 'option.nagpraInventories.caContraCostaCounty1',
        defaultMessage: 'CA-Contra Costa Co. 1',
      },
      caContraCostaCounty2: {
        id: 'option.nagpraInventories.caContraCostaCounty2',
        defaultMessage: 'CA-Contra Costa Co. 2',
      },
      caContraCostaCounty3: {
        id: 'option.nagpraInventories.caContraCostaCounty3',
        defaultMessage: 'CA-Contra Costa Co. 3',
      },
      caContraCostaCounty4: {
        id: 'option.nagpraInventories.caContraCostaCounty4',
        defaultMessage: 'CA-Contra Costa Co. 4',
      },
      caContraCostaCounty5: {
        id: 'option.nagpraInventories.caContraCostaCounty5',
        defaultMessage: 'CA-Contra Costa Co. 5',
      },
      caContraCostaCounty6: {
        id: 'option.nagpraInventories.caContraCostaCounty6',
        defaultMessage: 'CA-Contra Costa Co. 6',
      },
      caCco138: {
        id: 'option.nagpraInventories.caCco138',
        defaultMessage: 'CA-CCo-138',
      },
      caCco141: {
        id: 'option.nagpraInventories.caCco141',
        defaultMessage: 'CA-CCo-141 (Historic)',
      },
      caCupeno: {
        id: 'option.nagpraInventories.caCupeno',
        defaultMessage: 'CA-Cupeño',
      },
      caDelNorteCounty: {
        id: 'option.nagpraInventories.caDelNorteCounty',
        defaultMessage: 'CA-Del Norte Co.',
      },
      caElDoradoCounty: {
        id: 'option.nagpraInventories.caElDoradoCounty',
        defaultMessage: 'CA-El Dorado Co.',
      },
      caFoothillYokutsMonache1: {
        id: 'option.nagpraInventories.caFoothillYokutsMonache1',
        defaultMessage: 'CA-Foothill Yokuts/Monache 1',
      },
      caFoothillYokutsMonache2: {
        id: 'option.nagpraInventories.caFoothillYokutsMonache2',
        defaultMessage: 'CA-Foothill Yokuts/Monache 2',
      },
      caFresnoCounty1: {
        id: 'option.nagpraInventories.caFresnoCounty1',
        defaultMessage: 'CA-Fresno Co. 1',
      },
      caFresnoCounty2: {
        id: 'option.nagpraInventories.caFresnoCounty2',
        defaultMessage: 'CA-Fresno Co. 2',
      },
      caFresnoCounty3: {
        id: 'option.nagpraInventories.caFresnoCounty3',
        defaultMessage: 'CA-Fresno Co. 3',
      },
      caGlennCounty: {
        id: 'option.nagpraInventories.caGlennCounty',
        defaultMessage: 'CA-Glenn Co.',
      },
      caHumboldtCounty1: {
        id: 'option.nagpraInventories.caHumboldtCounty1',
        defaultMessage: 'CA-Humboldt Co. 1',
      },
      caHumboldtCounty2: {
        id: 'option.nagpraInventories.caHumboldtCounty2',
        defaultMessage: 'CA-Humboldt Co. 2',
      },
      caHumboldtCounty3: {
        id: 'option.nagpraInventories.caHumboldtCounty3',
        defaultMessage: 'CA-Humboldt Co. 3',
      },
      caInyoCounty1: {
        id: 'option.nagpraInventories.caInyoCounty1',
        defaultMessage: 'CA-Inyo Co. 1',
      },
      caInyoCounty2: {
        id: 'option.nagpraInventories.caInyoCounty2',
        defaultMessage: 'CA-Inyo Co. 2',
      },
      caKarok: {
        id: 'option.nagpraInventories.caKarok',
        defaultMessage: 'CA-Karok',
      },
      'caKer-74': {
        id: 'option.nagpraInventories.caKer-74',
        defaultMessage: 'CA-Ker-74 (Historic)',
      },
      caKernCounty1: {
        id: 'option.nagpraInventories.caKernCounty1',
        defaultMessage: 'CA-Kern Co. 1',
      },
      caKernCounty2: {
        id: 'option.nagpraInventories.caKernCounty2',
        defaultMessage: 'CA-Kern Co. 2',
      },
      caKernCounty3: {
        id: 'option.nagpraInventories.caKernCounty3',
        defaultMessage: 'CA-Kern Co. 3',
      },
      caKingsCounty: {
        id: 'option.nagpraInventories.caKingsCounty',
        defaultMessage: 'CA-Kings Co.',
      },
      caKonkow: {
        id: 'option.nagpraInventories.caKonkow',
        defaultMessage: 'CA-Konkow',
      },
      caLakeCounty: {
        id: 'option.nagpraInventories.caLakeCounty',
        defaultMessage: 'CA-Lake Co.',
      },
      caLassenCounty1: {
        id: 'option.nagpraInventories.caLassenCounty1',
        defaultMessage: 'CA-Lassen Co. 1',
      },
      caLassenCounty2: {
        id: 'option.nagpraInventories.caLassenCounty2',
        defaultMessage: 'CA-Lassen Co. 2',
      },
      caLassenCounty3: {
        id: 'option.nagpraInventories.caLassenCounty3',
        defaultMessage: 'CA-Lassen Co. 3',
      },
      caLosAngelesCounty1: {
        id: 'option.nagpraInventories.caLosAngelesCounty1',
        defaultMessage: 'CA-Los Angeles Co. 1',
      },
      caLosAngelesCounty2: {
        id: 'option.nagpraInventories.caLosAngelesCounty2',
        defaultMessage: 'CA-Los Angeles Co. 2',
      },
      caMaderaCounty1: {
        id: 'option.nagpraInventories.caMaderaCounty1',
        defaultMessage: 'CA-Madera Co. 1',
      },
      caMaderaCounty2: {
        id: 'option.nagpraInventories.caMaderaCounty2',
        defaultMessage: 'CA-Madera Co. 2',
      },
      caMarinCounty1: {
        id: 'option.nagpraInventories.caMarinCounty1',
        defaultMessage: 'CA-Marin Co. 1',
      },
      caMarinCounty2: {
        id: 'option.nagpraInventories.caMarinCounty2',
        defaultMessage: 'CA-Marin Co. 2',
      },
      caMariposaCounty: {
        id: 'option.nagpraInventories.caMariposaCounty',
        defaultMessage: 'CA-Mariposa Co.',
      },
      caMendocino: {
        id: 'option.nagpraInventories.caMendocino',
        defaultMessage: 'CA-Mendocino',
      },
      caMercedCounty: {
        id: 'option.nagpraInventories.caMercedCounty',
        defaultMessage: 'CA-Merced Co.',
      },
      caModocCounty1: {
        id: 'option.nagpraInventories.caModocCounty1',
        defaultMessage: 'CA-Modoc Co. 1',
      },
      caModocCounty2: {
        id: 'option.nagpraInventories.caModocCounty2',
        defaultMessage: 'CA-Modoc Co. 2',
      },
      caMonoCounty: {
        id: 'option.nagpraInventories.caMonoCounty',
        defaultMessage: 'CA-Mono Co.',
      },
      caMontereyCountyOh1: {
        id: 'option.nagpraInventories.caMontereyCountyOh1',
        defaultMessage: 'CA-Monterey Co. (OH1)',
      },
      caMontereyCountyOh2: {
        id: 'option.nagpraInventories.caMontereyCountyOh2',
        defaultMessage: 'CA-Monterey Co. (OH2)',
      },
      caMontereyCounty1: {
        id: 'option.nagpraInventories.caMontereyCounty1',
        defaultMessage: 'CA-Monterey Co. 1',
      },
      caMontereyCounty2: {
        id: 'option.nagpraInventories.caMontereyCounty2',
        defaultMessage: 'CA-Monterey Co. 2',
      },
      caMontereyCounty3: {
        id: 'option.nagpraInventories.caMontereyCounty3',
        defaultMessage: 'CA-Monterey Co. 3',
      },
      caNapaCounty1: {
        id: 'option.nagpraInventories.caNapaCounty1',
        defaultMessage: 'CA-Napa Co. 1',
      },
      caNapaCounty2: {
        id: 'option.nagpraInventories.caNapaCounty2',
        defaultMessage: 'CA-Napa Co. 2',
      },
      caNapaCounty3: {
        id: 'option.nagpraInventories.caNapaCounty3',
        defaultMessage: 'CA-Napa Co. 3',
      },
      caOrangeCounty: {
        id: 'option.nagpraInventories.caOrangeCounty',
        defaultMessage: 'CA-Orange Co.',
      },
      caPatwin1: {
        id: 'option.nagpraInventories.caPatwin1',
        defaultMessage: 'CA-Patwin 1 (Historic)',
      },
      caPatwin2: {
        id: 'option.nagpraInventories.caPatwin2',
        defaultMessage: 'CA-Patwin 2',
      },
      caPitRiver: {
        id: 'option.nagpraInventories.caPitRiver',
        defaultMessage: 'CA-Pit River',
      },
      caPlacerCounty: {
        id: 'option.nagpraInventories.caPlacerCounty',
        defaultMessage: 'CA-Placer Co.',
      },
      caPlumasCounty: {
        id: 'option.nagpraInventories.caPlumasCounty',
        defaultMessage: 'CA-Plumas Co.',
      },
      caPomo1: {
        id: 'option.nagpraInventories.caPomo1',
        defaultMessage: 'CA-Pomo 1',
      },
      caPomo2: {
        id: 'option.nagpraInventories.caPomo2',
        defaultMessage: 'CA-Pomo 2',
      },
      caPomo3: {
        id: 'option.nagpraInventories.caPomo3',
        defaultMessage: 'CA-Pomo 3',
      },
      caSac160: {
        id: 'option.nagpraInventories.caSac160',
        defaultMessage: 'CA-Sac-160 (Historic)',
      },
      caSacramentoCounty1: {
        id: 'option.nagpraInventories.caSacramentoCounty1',
        defaultMessage: 'CA-Sacramento Co. 1',
      },
      caSacramentoCounty2: {
        id: 'option.nagpraInventories.caSacramentoCounty2',
        defaultMessage: 'CA-Sacramento Co. 2',
      },
      caSacramentoCounty3: {
        id: 'option.nagpraInventories.caSacramentoCounty3',
        defaultMessage: 'CA-Sacramento Co. 3',
      },
      caSacramentoCounty4: {
        id: 'option.nagpraInventories.caSacramentoCounty4',
        defaultMessage: 'CA-Sacramento Co. 4',
      },
      caSac16revised: {
        id: 'option.nagpraInventories.caSac16revised',
        defaultMessage: 'CA-Sac-16 (revised to affiliated)',
      },
      caSanBenitoCounty: {
        id: 'option.nagpraInventories.caSanBenitoCounty',
        defaultMessage: 'CA-San Benito Co.',
      },
      caSanClementeIsland: {
        id: 'option.nagpraInventories.caSanClementeIsland',
        defaultMessage: 'CA-San Clemente Island',
      },
      caSanDiego: {
        id: 'option.nagpraInventories.caSanDiego',
        defaultMessage: 'CA-San Diego',
      },
      caSanFranciscoOh1: {
        id: 'option.nagpraInventories.caSanFranciscoOh1',
        defaultMessage: 'CA-San Francisco (OH1)',
      },
      caSanFranciscoOh2: {
        id: 'option.nagpraInventories.caSanFranciscoOh2',
        defaultMessage: 'CA-San Francisco (OH2)',
      },
      caSanFranciscoCounty1: {
        id: 'option.nagpraInventories.caSanFranciscoCounty1',
        defaultMessage: 'CA-San Francisco Co. 1',
      },
      caSanJoaquinCounty1: {
        id: 'option.nagpraInventories.caSanJoaquinCounty1',
        defaultMessage: 'CA-San Joaquin Co. 1',
      },
      caSanJoaquinCounty2: {
        id: 'option.nagpraInventories.caSanJoaquinCounty2',
        defaultMessage: 'CA-San Joaquin Co. 2',
      },
      caSanJoaquinCounty5: {
        id: 'option.nagpraInventories.caSanJoaquinCounty5',
        defaultMessage: 'CA-San Joaquin Co. 5',
      },
      caSanLuisObispoCounty1: {
        id: 'option.nagpraInventories.caSanLuisObispoCounty1',
        defaultMessage: 'CA-San Luis Obispo Co. 1',
      },
      caSanLuisObispoCounty2: {
        id: 'option.nagpraInventories.caSanLuisObispoCounty2',
        defaultMessage: 'CA-San Luis Obispo Co. 2',
      },
      caSanMateoCo: {
        id: 'option.nagpraInventories.caSanMateoCo',
        defaultMessage: 'CA-San Mateo Co. (OH1)',
      },
      caSanMateoCounty1: {
        id: 'option.nagpraInventories.caSanMateoCounty1',
        defaultMessage: 'CA-San Mateo Co. 1',
      },
      caSanNicolasIsland: {
        id: 'option.nagpraInventories.caSanNicolasIsland',
        defaultMessage: 'CA-San Nicolas Island',
      },
      caSanPasqual: {
        id: 'option.nagpraInventories.caSanPasqual',
        defaultMessage: 'CA-San Pasqual',
      },
      caSantaCatalinaIsland1: {
        id: 'option.nagpraInventories.caSantaCatalinaIsland1',
        defaultMessage: 'CA-Santa Catalina Island 1',
      },
      caSantaCatalinaIsland2: {
        id: 'option.nagpraInventories.caSantaCatalinaIsland2',
        defaultMessage: 'CA-Santa Catalina Island 2',
      },
      caSantaClaraCountyOh1: {
        id: 'option.nagpraInventories.caSantaClaraCountyOh1',
        defaultMessage: 'CA-Santa Clara Co. (OH1)',
      },
      caSantaClaraCountyOh2: {
        id: 'option.nagpraInventories.caSantaClaraCountyOh2',
        defaultMessage: 'CA-Santa Clara Co. (OH2)',
      },
      caSantaClaraCounty1: {
        id: 'option.nagpraInventories.caSantaClaraCounty1',
        defaultMessage: 'CA-Santa Clara Co. 1',
      },
      caSantaClaraCounty2: {
        id: 'option.nagpraInventories.caSantaClaraCounty2',
        defaultMessage: 'CA-Santa Clara Co. 2',
      },
      caSantaCruzCountyOh1: {
        id: 'option.nagpraInventories.caSantaCruzCountyOh1',
        defaultMessage: 'CA-Santa Cruz Co. (OH1)',
      },
      caSantaCruzCounty1: {
        id: 'option.nagpraInventories.caSantaCruzCounty1',
        defaultMessage: 'CA-Santa Cruz Co. 1',
      },
      caSantaCruzCounty2: {
        id: 'option.nagpraInventories.caSantaCruzCounty2',
        defaultMessage: 'CA-Santa Cruz Co. 2',
      },
      caShastaCounty1: {
        id: 'option.nagpraInventories.caShastaCounty1',
        defaultMessage: 'CA-Shasta Co. 1',
      },
      caShastaCounty2: {
        id: 'option.nagpraInventories.caShastaCounty2',
        defaultMessage: 'CA-Shasta Co. 2',
      },
      caShastaCounty3: {
        id: 'option.nagpraInventories.caShastaCounty3',
        defaultMessage: 'CA-Shasta Co. 3',
      },
      caSierraMiwok: {
        id: 'option.nagpraInventories.caSierraMiwok',
        defaultMessage: 'CA-Sierra Miwok',
      },
      caSis262: {
        id: 'option.nagpraInventories.caSis262',
        defaultMessage: 'CA-Sis-262 (Historic)',
      },
      caSiskiyouCounty1: {
        id: 'option.nagpraInventories.caSiskiyouCounty1',
        defaultMessage: 'CA-Siskiyou Co. 1',
      },
      caSiskiyouCounty2: {
        id: 'option.nagpraInventories.caSiskiyouCounty2',
        defaultMessage: 'CA-Siskiyou Co. 2',
      },
      caSolanoCounty1: {
        id: 'option.nagpraInventories.caSolanoCounty1',
        defaultMessage: 'CA-Solano Co. 1',
      },
      caSolanoCounty2: {
        id: 'option.nagpraInventories.caSolanoCounty2',
        defaultMessage: 'CA-Solano Co. 2',
      },
      caSolanoCounty3: {
        id: 'option.nagpraInventories.caSolanoCounty3',
        defaultMessage: 'CA-Solano Co. 3',
      },
      caSonomaCounty: {
        id: 'option.nagpraInventories.caSonomaCounty',
        defaultMessage: 'CA-Sonoma Co.',
      },
      caSouthernValleyYokuts: {
        id: 'option.nagpraInventories.caSouthernValleyYokuts',
        defaultMessage: 'CA-Southern Valley Yokuts',
      },
      caStanislausCounty1: {
        id: 'option.nagpraInventories.caStanislausCounty1',
        defaultMessage: 'CA-Stanislaus Co. 1',
      },
      caStanislausCounty2: {
        id: 'option.nagpraInventories.caStanislausCounty2',
        defaultMessage: 'CA-Stanislaus Co. 2',
      },
      caSutterCounty1: {
        id: 'option.nagpraInventories.caSutterCounty1',
        defaultMessage: 'CA-Sutter Co. 1',
      },
      caSutterCounty2: {
        id: 'option.nagpraInventories.caSutterCounty2',
        defaultMessage: 'CA-Sutter Co. 2',
      },
      caTehamaCounty1: {
        id: 'option.nagpraInventories.caTehamaCounty1',
        defaultMessage: 'CA-Tehama Co. 1',
      },
      caTehamaCounty2: {
        id: 'option.nagpraInventories.caTehamaCounty2',
        defaultMessage: 'CA-Tehama Co. 2',
      },
      caTeh58: {
        id: 'option.nagpraInventories.caTeh58',
        defaultMessage: 'CA-Teh-58 (Historic)',
      },
      caTrinityCounty1: {
        id: 'option.nagpraInventories.caTrinityCounty1',
        defaultMessage: 'CA-Trinity Co. 1',
      },
      caTrinityCounty2: {
        id: 'option.nagpraInventories.caTrinityCounty2',
        defaultMessage: 'CA-Trinity Co. 2',
      },
      caTulareCounty1: {
        id: 'option.nagpraInventories.caTulareCounty1',
        defaultMessage: 'CA-Tulare Co. 1',
      },
      caTulareCounty2: {
        id: 'option.nagpraInventories.caTulareCounty2',
        defaultMessage: 'CA-Tulare Co. 2',
      },
      caTulareCounty3: {
        id: 'option.nagpraInventories.caTulareCounty3',
        defaultMessage: 'CA-Tulare Co. 3',
      },
      caTulareCounty4: {
        id: 'option.nagpraInventories.caTulareCounty4',
        defaultMessage: 'CA-Tulare Co. 4',
      },
      caTulareCounty5: {
        id: 'option.nagpraInventories.caTulareCounty5',
        defaultMessage: 'CA-Tulare Co. 5',
      },
      caWesternShoshone: {
        id: 'option.nagpraInventories.caWesternShoshone',
        defaultMessage: 'CA-Western Shoshone',
      },
      caWintun: {
        id: 'option.nagpraInventories.caWintun',
        defaultMessage: 'CA-Wintun',
      },
      caWiyot: {
        id: 'option.nagpraInventories.caWiyot',
        defaultMessage: 'CA-Wiyot',
      },
      caYana: {
        id: 'option.nagpraInventories.caYana',
        defaultMessage: 'CA-Yana',
      },
      caYol13: {
        id: 'option.nagpraInventories.caYol13',
        defaultMessage: 'CA-Yol-13 (Historic)',
      },
      caYoloCounty1: {
        id: 'option.nagpraInventories.caYoloCounty1',
        defaultMessage: 'CA-Yolo Co. 1',
      },
      caYoloCounty2: {
        id: 'option.nagpraInventories.caYoloCounty2',
        defaultMessage: 'CA-Yolo Co. 2',
      },
      caYoloCounty3: {
        id: 'option.nagpraInventories.caYoloCounty3',
        defaultMessage: 'CA-Yolo Co. 3',
      },
      caYubaCounty: {
        id: 'option.nagpraInventories.caYubaCounty',
        defaultMessage: 'CA-Yuba Co.',
      },
      caYub5: {
        id: 'option.nagpraInventories.caYub5',
        defaultMessage: 'CA-Yub-5 (Historic)',
      },
      caYuki: {
        id: 'option.nagpraInventories.caYuki',
        defaultMessage: 'CA-Yuki',
      },
      caYurok: {
        id: 'option.nagpraInventories.caYurok',
        defaultMessage: 'CA-Yurok',
      },
      coMontezumaCounty: {
        id: 'option.nagpraInventories.coMontezumaCounty',
        defaultMessage: 'CO-Montezuma Co.',
      },
      idLemhiCounty: {
        id: 'option.nagpraInventories.idLemhiCounty',
        defaultMessage: 'ID-Lemhi Co.',
      },
      ilMadisonCounty: {
        id: 'option.nagpraInventories.ilMadisonCounty',
        defaultMessage: 'IL-Madison Co.',
      },
      inIndiana: {
        id: 'option.nagpraInventories.inIndiana',
        defaultMessage: 'IN-Indiana',
      },
      lamarHistoric: {
        id: 'option.nagpraInventories.lamarHistoric',
        defaultMessage: 'Lamar (Historic)',
      },
      miMichigan: {
        id: 'option.nagpraInventories.miMichigan',
        defaultMessage: 'MI-Michigan',
      },
      ndMandan: {
        id: 'option.nagpraInventories.ndMandan',
        defaultMessage: 'ND-Mandan',
      },
      njNewJersey: {
        id: 'option.nagpraInventories.njNewJersey',
        defaultMessage: 'NJ-New Jersey',
      },
      nmMckinleyCounty: {
        id: 'option.nagpraInventories.nmMckinleyCounty',
        defaultMessage: 'NM-McKinley Co.',
      },
      nvChurchillCounty: {
        id: 'option.nagpraInventories.nvChurchillCounty',
        defaultMessage: 'NV-Churchill Co.',
      },
      nvClarkCounty1: {
        id: 'option.nagpraInventories.nvClarkCounty1',
        defaultMessage: 'NV-Clark Co. 1',
      },
      nvClarkCounty2: {
        id: 'option.nagpraInventories.nvClarkCounty2',
        defaultMessage: 'NV-Clark Co. 2',
      },
      nvHumboldtCounty: {
        id: 'option.nagpraInventories.nvHumboldtCounty',
        defaultMessage: 'NV-Humboldt Co.',
      },
      nvNevada: {
        id: 'option.nagpraInventories.nvNevada',
        defaultMessage: 'NV-Nevada',
      },
      nvNorthernPaiute: {
        id: 'option.nagpraInventories.nvNorthernPaiute',
        defaultMessage: 'NV-Northern Paiute',
      },
      nvPershingCounty: {
        id: 'option.nagpraInventories.nvPershingCounty',
        defaultMessage: 'NV-Pershing Co.',
      },
      nvSouthernPaiute: {
        id: 'option.nagpraInventories.nvSouthernPaiute',
        defaultMessage: 'NV-Southern Paiute',
      },
      nvWashoe: {
        id: 'option.nagpraInventories.nvWashoe',
        defaultMessage: 'NV-Washoe',
      },
      nvWashoeCounty1: {
        id: 'option.nagpraInventories.nvWashoeCounty1',
        defaultMessage: 'NV-Washoe Co. 1',
      },
      nvWashoeCounty2: {
        id: 'option.nagpraInventories.nvWashoeCounty2',
        defaultMessage: 'NV-Washoe Co. 2',
      },
      nyNewYork: {
        id: 'option.nagpraInventories.nyNewYork',
        defaultMessage: 'NY-New York',
      },
      orCalapooya: {
        id: 'option.nagpraInventories.orCalapooya',
        defaultMessage: 'OR-Calapooya',
      },
      orChetco: {
        id: 'option.nagpraInventories.orChetco',
        defaultMessage: 'OR-Chetco',
      },
      orJacksonCounty: {
        id: 'option.nagpraInventories.orJacksonCounty',
        defaultMessage: 'OR-Jackson Co.',
      },
      orKlamath: {
        id: 'option.nagpraInventories.orKlamath',
        defaultMessage: 'OR-Klamath',
      },
      orKlamathCounty: {
        id: 'option.nagpraInventories.orKlamathCounty',
        defaultMessage: 'OR-Klamath Co.',
      },
      orMorrowCounty: {
        id: 'option.nagpraInventories.orMorrowCounty',
        defaultMessage: 'OR-Morrow Co.',
      },
      orWascoCounty: {
        id: 'option.nagpraInventories.orWascoCounty',
        defaultMessage: 'OR-Wasco Co.',
      },
      sdBrownCounty: {
        id: 'option.nagpraInventories.sdBrownCounty',
        defaultMessage: 'SD-Brown Co.',
      },
      tnMontgomeryCounty: {
        id: 'option.nagpraInventories.tnMontgomeryCounty',
        defaultMessage: 'TN-Montgomery Co.',
      },
      utBoxElderCounty: {
        id: 'option.nagpraInventories.utBoxElderCounty',
        defaultMessage: 'UT-Box Elder Co.',
      },
      utSanJuanCounty1: {
        id: 'option.nagpraInventories.utSanJuanCounty1',
        defaultMessage: 'UT-San Juan Co. 1',
      },
      utSanJuanCounty2: {
        id: 'option.nagpraInventories.utSanJuanCounty2',
        defaultMessage: 'UT-San Juan Co. 2',
      },
      waAsotinCounty: {
        id: 'option.nagpraInventories.waAsotinCounty',
        defaultMessage: 'WA-Asotin Co.',
      },
      waClallam: {
        id: 'option.nagpraInventories.waClallam',
        defaultMessage: 'WA-Clallam',
      },
      waCowlitzCounty: {
        id: 'option.nagpraInventories.waCowlitzCounty',
        defaultMessage: 'WA-Cowlitz Co.',
      },
      waKing: {
        id: 'option.nagpraInventories.waKing',
        defaultMessage: 'WA-King',
      },
      waKlickitatCounty: {
        id: 'option.nagpraInventories.waKlickitatCounty',
        defaultMessage: 'WA-Klickitat Co.',
      },
      waKl24245kl242: {
        id: 'option.nagpraInventories.waKl24245kl242',
        defaultMessage: 'WA-KL-242 (45KL242) (Historic)',
      },
      waMillersIsland: {
        id: 'option.nagpraInventories.waMillersIsland',
        defaultMessage: 'WA-Millers Island (Historic)',
      },
      waYakima: {
        id: 'option.nagpraInventories.waYakima',
        defaultMessage: 'WA-Yakima',
      },
      nonNagpra1: {
        id: 'option.nagpraInventories.nonNagpra1',
        defaultMessage: 'non-NAGPRA 1',
      },
      nonNagpra2: {
        id: 'option.nagpraInventories.nonNagpra2',
        defaultMessage: 'non-NAGPRA 2',
      },
      nonNagpra3: {
        id: 'option.nagpraInventories.nonNagpra3',
        defaultMessage: 'non-NAGPRA 3',
      },
      nonNagpra4: {
        id: 'option.nagpraInventories.nonNagpra4',
        defaultMessage: 'non-NAGPRA 4',
      },
      nonNagpra5: {
        id: 'option.nagpraInventories.nonNagpra5',
        defaultMessage: 'non-NAGPRA 5',
      },
      nonNagpra6: {
        id: 'option.nagpraInventories.nonNagpra6',
        defaultMessage: 'non-NAGPRA 6',
      },
      nonNagpra7: {
        id: 'option.nagpraInventories.nonNagpra7',
        defaultMessage: 'non-NAGPRA 7',
      },
      nonNagpra8: {
        id: 'option.nagpraInventories.nonNagpra8',
        defaultMessage: 'non-NAGPRA 8',
      },
      nonNagpra9: {
        id: 'option.nagpraInventories.nonNagpra9',
        defaultMessage: 'non-NAGPRA 9',
      },
      nonNagpra10: {
        id: 'option.nagpraInventories.nonNagpra10',
        defaultMessage: 'non-NAGPRA 10',
      },
      nonNagpra11: {
        id: 'option.nagpraInventories.nonNagpra11',
        defaultMessage: 'non-NAGPRA 11',
      },
      unknown: {
        id: 'option.nagpraInventories.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
  nagpraCategories: {
    values: [
      'nonNagpra',
      'affiliatedHsr',
      'unaffiliatedCuiHsr',
      'afo',
      'ufo',
      'sacredObject',
      'objectOfCulturalPatrimony',
      'subjectToNAGPRA',
      'needsFurtherResearch',
      'unknown',
    ],
    messages: defineMessages({
      nonNagpra: {
        id: 'option.nagpraCategories.nonNagpra',
        defaultMessage: 'not subject to NAGPRA',
      },
      affiliatedHsr: {
        id: 'option.nagpraCategories.affiliatedHsr',
        defaultMessage: 'affiliated human skeletal remains (HSR)',
      },
      unaffiliatedCuiHsr: {
        id: 'option.nagpraCategories.unaffiliatedCuiHsr',
        defaultMessage: 'unaffiliated human skeletal remains (HSR) (=CUI)',
      },
      afo: {
        id: 'option.nagpraCategories.afo',
        defaultMessage: 'associated funerary object (AFO)',
      },
      ufo: {
        id: 'option.nagpraCategories.ufo',
        defaultMessage: 'unassociated funerary object (UFO)',
      },
      sacredObject: {
        id: 'option.nagpraCategories.sacredObject',
        defaultMessage: 'sacred object',
      },
      objectOfCulturalPatrimony: {
        id: 'option.nagpraCategories.objectOfCulturalPatrimony',
        defaultMessage: 'object of cultural patrimony',
      },
      subjectToNAGPRA: {
        id: 'option.nagpraCategories.subjectToNAGPRA',
        defaultMessage: 'subject to NAGPRA (unspec.)',
      },
      needsFurtherResearch: {
        id: 'option.nagpraCategories.needsFurtherResearch',
        defaultMessage: 'needs further research',
      },
      unknown: {
        id: 'option.nagpraCategories.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
  accessRestrictionLevels: {
    values: [
      'preference',
      'recommendation',
      'restriction',
      'unknown',
    ],
  },
  positions: {
    values: [
      'back',
      'base',
      'bottom',
      'front',
      'inside',
      'left',
      'outside',
      'right',
      'rim',
      'top',
    ],
  },
};
