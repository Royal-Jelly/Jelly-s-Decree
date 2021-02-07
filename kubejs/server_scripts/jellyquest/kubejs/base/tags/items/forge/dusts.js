events.listen('item.tags', function (event) {
    event
        .get('forge:dusts')
        .add('immersiveengineering:dust_aluminum')
        .add('immersiveengineering:dust_lead')
        .add('immersiveengineering:dust_silver')
        .add('immersiveengineering:dust_nickel')
        .add('immersiveengineering:dust_uranium')
        .add('immersiveengineering:dust_constantan')
        .add('immersiveengineering:dust_electrum')
        .add('immersiveengineering:dust_coke')
        .add('immersiveengineering:dust_hop_graphite')
        .add('immersiveengineering:dust_saltpeter')

    event.get('forge:dusts/hop_graphite').add('emendatusenigmatica:graphite_dust');

    event.get('forge:dusts').remove('minecraft:prismarine_shard');
    event.get('forge:dusts/prismarine').remove('minecraft:prismarine_shard');

    event.get('forge:dusts/ender_pearl').add('emendatusenigmatica:ender_dust');

    event.get('forge:dusts/gold_copper').add('#forge:dusts/gold').add('#forge:dusts/copper');
    event.get('forge:dusts/iron_aluminum').add('#forge:dusts/iron').add('#forge:dusts/aluminum');

    event.get('forge:dusts/netherite_scrap').remove('bloodmagic:sand_netherite');

    // Temporary until EE adapts this change
    event.get('forge:chunks/arcane').remove('emendatusenigmatica:arcane_chunk');
    event.get('forge:ores/arcane').remove('emendatusenigmatica:arcane_chunk');
    event.get('forge:ores/arcane').remove('emendatusenigmatica:arcane_ore');
    event.get('forge:gems/arcane').remove('emendatusenigmatica:arcane_gem');
    event.get('forge:storage_blocks/arcane').remove('emendatusenigmatica:arcane_block');
    event.get('forge:storage_blocks/mana').add('emendatusenigmatica:arcane_block');
    event.get('forge:chunks/mana').add('emendatusenigmatica:arcane_chunk');
    event.get('forge:ores/mana').add('emendatusenigmatica:arcane_ore');
    event.get('forge:ores/mana').add('emendatusenigmatica:arcane_chunk');
    event.get('forge:gems/mana').add('emendatusenigmatica:arcane_gem');
});