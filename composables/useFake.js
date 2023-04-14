import { faker } from '@faker-js/faker';
import _ from 'lodash';

export default () => {
  return {
    _,
    ...faker,
    fakeData(n, call) {
      return _.range(n).map(call);
    },
    map() {
      return _.sample(this.maps());
    },
    mapThumbnail(map=null) {
      return `https://play-cs.com/map_thumb/embed_v2/${map || this.map()}.jpg`;
    },
    countryFlag(country=null) {
      return `https://flagcdn.com/w320/${country ? country.toLowerCase() : 'br'}.png`;
    },
    maps() {
      return [
        '35hp_2', '35hp_frosted2', '35hp_gx', '35hp_minecraft', '35hp_orbit_sw', '35hp_spacedoff_sw',
        '35hp_winter', '35hp_xmas', 'aim_00', 'aim_aaa', 'aim_by_pd311_minecraft', 'aim_dusty_ak', 'aim_glock',
        'aim_grad', 'aim_headshot', 'aim_map', 'aim_map_deagle3k', 'aim_minecraft', 'aim_qpad_2007', 'aim_rigel',
        'aim_russia', 'aim_squares_mr', 'aim_taliban', 'aim_usp', 'aim_verano', 'as_buzzkill', 'as_core', 'as_endtown',
        'as_oilrig', 'as_tundra', 'awp_base', 'awp_city', 'awp_elite_1337_v2', 'awp_gorodok_night', 'awp_india',
        'awp_india_go', 'awp_india_minecraft', 'awp_india_nav72_go', 'awp_lego_2018', 'awp_map_hd', 'awp_puertomadero',
        'awp_sterile', 'awp_vertigo_final', 'bhop_bkz_goldbhop', 'bhop_blocks', 'bhop_deposito', 'bhop_kzeed_prohop',
        'bhop_lmx_bhopsector', 'bhop_mls_pal_bhops_h', 'bhop_pena_damn', 'cs_16fighter', 'cs_747', 'cs_agency_go',
        'cs_alley', 'cs_altay', 'cs_arabstreets', 'cs_assault', 'cs_assault_gamma', 'cs_assault_go', 'cs_assault_iqyoshi',
        'cs_assault_rats', 'cs_assault_rifles', 'cs_assault_russka', 'cs_assault_shadow', 'cs_assault_upc', 'cs_backalley',
        'cs_bank', 'cs_bikini', 'cs_delta_assault', 'cs_docks', 'cs_estate', 'cs_hdb', 'cs_italy', 'cs_italy2',
        'cs_italy_cz', 'cs_mansion', 'cs_militia', 'cs_moskva_msc', 'cs_office', 'cs_office_cz', 'cs_omahabeach_ww2',
        'cs_rio', 'cs_ruins', 'cs_salami_ww2', 'cs_schultz_ww2_cz', 'cs_siege', 'cs_swetofor', 'cs_untitled',
        'de_abortion', 'de_alexandra', 'de_alps', 'de_atico_rats', 'de_avangard', 'de_aztec', 'de_aztec_2x2',
        'de_aztec_cs15', 'de_aztec_cz', 'de_azteced', 'de_borovlyane', 'de_cache_v2', 'de_cbble', 'de_cesky_krumlov_ww2',
        'de_chemise', 'de_clan1_mill_2x2', 'de_clan2_fire', 'de_cloister', 'de_coldwar_ww2', 'de_cpl_fire', 'de_cpl_mill',
        'de_cu6upb_se', 'de_dam_final', 'de_duphets', 'de_dust', 'de_dust2', 'de_dust2002', 'de_dust2_2x2',
        'de_dust2_2x2_snow', 'de_dust2_2x2_spqr2020_b5', 'de_dust2_benders', 'de_dust2_css', 'de_dust2_cz',
        'de_dust2_forest', 'de_dust2_go', 'de_dust2_md', 'de_dust2_santorini_b2', 'de_dust2_wh', 'de_dust2_xmas',
        'de_dust2x2_cz', 'de_dust3_css', 'de_dust_assault', 'de_dust_cz', 'de_dust_go', 'de_dust_mini2', 'de_dvor',
        'de_fastline_cz', 'de_giza_b4', 'de_hell', 'de_hometown', 'de_hone_pre', 'de_inetcafe', 'de_inferno',
        'de_inferno_cz', 'de_inferno_go', 'de_inferno_wh', 'de_inferno_winter', 'de_inka', 'de_kabul_css', 'de_kievpass',
        'de_mirage', 'de_mirage_go', 'de_nuke', 'de_nuke_go', 'de_nuke_hq', 'de_nuke_v2_go', 'de_overpass_v2',
        'de_parikia_b1', 'de_portation', 'de_pripyat', 'de_prodigy', 'de_rain', 'de_rats2_2002', 'de_rats_caravan',
        'de_russia', 'de_russia_2x2', 'de_russka', 'de_santorini', 'de_seaside', 'de_skidrow_2010', 'de_slc',
        'de_stadium_cz', 'de_storm', 'de_subway_v3', 'de_survivor', 'de_train', 'de_train_2x2', 'de_trainwinter_go',
        'de_truth_cz', 'de_tuscan', 'de_twhl2011', 'de_vegas', 'de_verso', 'de_vertigo', 'de_vertigo_2013',
        'de_vertigo_go', 'de_vostok_cz', 'de_vpclub', 'de_westwood', 'de_winter', 'de_xpecm', 'dr_dangerous',
        'ffa_2000', 'ffa_abducted_sw', 'ffa_assault_1337', 'ffa_assault_upc', 'ffa_bigfreakinhouse',
        'ffa_citymall_fem', 'ffa_cloudcity_sw', 'ffa_dust', 'ffa_dust2', 'ffa_dust2_ak47', 'ffa_dust2_buff',
        'ffa_dust2_m4', 'ffa_dust2_xmas', 'ffa_electrified', 'ffa_garden_rats', 'ffa_iceworld', 'ffa_kvartal2',
        'ffa_mall_fem', 'ffa_mon', 'ffa_pripyat', 'ffa_rats3_v2', 'ffa_rats_1337', 'ffa_rats_1337_cz',
        'ffa_rats_caravan', 'ffa_slimi', 'ffa_train', 'fy_1000', 'fy_2000', 'fy_3000_b3', 'fy_adrenalin',
        'fy_airsoft_v2', 'fy_bloodstirke', 'fy_buzzkill', 'fy_cccp_celo_ww2', 'fy_deathmatch', 'fy_dust2',
        'fy_iceworld', 'fy_iceworld2k', 'fy_iceworldx', 'fy_md', 'fy_minecraft', 'fy_mini_militia', 'fy_msk_centr',
        'fy_new_pool_day2', 'fy_old_war_ww2', 'fy_polar', 'fy_pool_day', 'fy_pool_day2', 'fy_pool_day_go', 'fy_shushmor',
        'fy_snow', 'fy_snow2', 'fy_snow_2016', 'fy_speedrun', 'fy_splash', 'fy_vertigo', 'fy_world_minecraft', 'fy_xmas',
        'gg_2000', 'gg_adrenalin', 'gg_airsoft_v2', 'gg_bikini', 'gg_cloudcity_sw', 'gg_deathmatch', 'gg_dust', 'gg_dust2',
        'gg_dust2_santorini_b2', 'gg_dust2_xmas', 'gg_dustwars', 'gg_easy_kill', 'gg_elite_1337_v2', 'gg_inferno',
        'gg_little_house', 'gg_moskva_msc', 'gg_new_pool_day2', 'gg_simpsons', 'gg_snowpool', 'gg_sterile', 'gg_swetofor',
        'gg_trainwinter_go', 'gg_trash_metal', 'gg_winter_s', 'he_construct', 'he_glass2', 'he_krystal', 'he_neighborhood',
        'he_night_mr', 'he_snow_war', 'he_volleyball', 'he_west_mr', 'hns_building', 'hns_floppytown', 'hns_mansion',
        'hns_rayish_saxum', 'hns_village', 'surf_colorama_beta', 'surf_combat', 'surf_green', 'surf_iceday2',
        'surf_labirinto', 'surf_minecraft_fabi', 'surf_sand', 'surf_ski_2', 'surf_ski_5', 'surf_super_mario',
        'training_cc', 'training_reverti',
      ];
    },
  };
};