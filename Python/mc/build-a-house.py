from mcpi.minecraft import Minecraft
from mcpi import block
mc = Minecraft.create()

mc.postToChat("Hello World")

mc.setBlocks(-70, 0, -70, 50, 50, 50, block.AIR)
mc.setBlocks(-70, -20, -70, 50, -1, 50, block.GRASS)
mc.player.setTilePos(0, 0, 0)

def one_house():
    def floor():
        mc.setBlocks(-22, -1, -42, 22, 0, 40, block.STONE)