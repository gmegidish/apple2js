/* Copyright (c) 2009 Tobias Schneider <schneider@jancona.com> */

var a, x, y, p, s, pc;
var zn = [
	0x02, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
	0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x80, 0x80, 0x80, 0x80, 0x80,
	0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
	0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
	0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
	0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
	0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
	0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80,
	0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80
];
var c = [
  	7, 6, 2, 8, 3, 3, 5, 5, 3, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 5, 4, 7, 7, 6, 6, 2, 8, 3, 3,
	5, 5, 4, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 5, 4, 7, 7, 6, 6, 2, 8, 3, 3, 5, 5, 3, 2, 2, 2,
	3, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 5, 4, 7, 7, 6, 6, 2, 8, 3, 3, 5, 5, 4, 2, 2, 2, 5, 4, 6, 6, 4, 5,
	2, 3, 4, 4, 6, 6, 2, 4, 2, 7, 5, 4, 7, 7, 2, 6, 2, 6, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4, 2, 6, 2, 6, 4, 4, 4, 4,
	2, 5, 2, 5, 5, 5, 5, 5, 2, 6, 2, 6, 3, 3, 3, 3, 2, 2, 2, 2, 4, 4, 4, 4, 2, 5, 2, 5, 4, 4, 4, 4, 2, 4, 2, 4, 4, 4,
	4, 4, 2, 6, 2, 8, 3, 3, 5, 5, 2, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 5, 4, 7, 7, 2, 6, 2, 8,
	3, 3, 5, 5, 2, 2, 2, 2, 4, 4, 6, 6, 2, 5, 2, 8, 4, 4, 6, 6, 2, 4, 2, 7, 5, 4, 7, 7
];
var m = new Array(0xffff);
var debug_enabled = false;
var initialized = false;

var dirty_scanlines = new Array(2*192);
var offset_to_scanline = new Array(0x2000 * 2);

var scanline_to_offset =
[
	0x0000, 0x0400, 0x0800, 0x0c00, 0x1000, 0x1400, 0x1800, 0x1c00, 
	0x0080, 0x0480, 0x0880, 0x0c80, 0x1080, 0x1480, 0x1880, 0x1c80, 
	0x0100, 0x0500, 0x0900, 0x0d00, 0x1100, 0x1500, 0x1900, 0x1d00, 
	0x0180, 0x0580, 0x0980, 0x0d80, 0x1180, 0x1580, 0x1980, 0x1d80, 
	0x0200, 0x0600, 0x0a00, 0x0e00, 0x1200, 0x1600, 0x1a00, 0x1e00, 
	0x0280, 0x0680, 0x0a80, 0x0e80, 0x1280, 0x1680, 0x1a80, 0x1e80, 
	0x0300, 0x0700, 0x0b00, 0x0f00, 0x1300, 0x1700, 0x1b00, 0x1f00, 
	0x0380, 0x0780, 0x0b80, 0x0f80, 0x1380, 0x1780, 0x1b80, 0x1f80, 
	0x0028, 0x0428, 0x0828, 0x0c28, 0x1028, 0x1428, 0x1828, 0x1c28, 
	0x00a8, 0x04a8, 0x08a8, 0x0ca8, 0x10a8, 0x14a8, 0x18a8, 0x1ca8, 
	0x0128, 0x0528, 0x0928, 0x0d28, 0x1128, 0x1528, 0x1928, 0x1d28, 
	0x01a8, 0x05a8, 0x09a8, 0x0da8, 0x11a8, 0x15a8, 0x19a8, 0x1da8, 
	0x0228, 0x0628, 0x0a28, 0x0e28, 0x1228, 0x1628, 0x1a28, 0x1e28, 
	0x02a8, 0x06a8, 0x0aa8, 0x0ea8, 0x12a8, 0x16a8, 0x1aa8, 0x1ea8, 
	0x0328, 0x0728, 0x0b28, 0x0f28, 0x1328, 0x1728, 0x1b28, 0x1f28, 
	0x03a8, 0x07a8, 0x0ba8, 0x0fa8, 0x13a8, 0x17a8, 0x1ba8, 0x1fa8, 
	0x0050, 0x0450, 0x0850, 0x0c50, 0x1050, 0x1450, 0x1850, 0x1c50, 
	0x00d0, 0x04d0, 0x08d0, 0x0cd0, 0x10d0, 0x14d0, 0x18d0, 0x1cd0, 
	0x0150, 0x0550, 0x0950, 0x0d50, 0x1150, 0x1550, 0x1950, 0x1d50, 
	0x01d0, 0x05d0, 0x09d0, 0x0dd0, 0x11d0, 0x15d0, 0x19d0, 0x1dd0, 
	0x0250, 0x0650, 0x0a50, 0x0e50, 0x1250, 0x1650, 0x1a50, 0x1e50, 
	0x02d0, 0x06d0, 0x0ad0, 0x0ed0, 0x12d0, 0x16d0, 0x1ad0, 0x1ed0, 
	0x0350, 0x0750, 0x0b50, 0x0f50, 0x1350, 0x1750, 0x1b50, 0x1f50, 
	0x03d0, 0x07d0, 0x0bd0, 0x0fd0, 0x13d0, 0x17d0, 0x1bd0, 0x1fd0
];

var page_2 = 0;

function invalidate_scanlines()
{
	for (var i=0; i<2*192; i++)
	{
		dirty_scanlines[i] = 1;
	}
}

function make_lut()
{
	for (i=0; i<offset_to_scanline.length; i++)
	{
		// fill video memory holes in advance
		offset_to_scanline[i] = 0;
	}

	for (row=0; row<192; row++)
	{
		var src = ((row & 7) * 0x400) + (((row >> 3) & 0x07) * 0x80) + (((row >> 6) & 0x7) * 0x28);

		for (x=0; x<40; x++)
		{
			offset_to_scanline[src+x] = row;
			offset_to_scanline[0x2000+src+x] = (row + 192);
		}
	}
}

function reset()
{
	a = x = y = 0x00;
	p = 0x04;
	s = 0xff;
	pc = 0;
	make_lut();
	invalidate_scanlines();
}

function peek(addr)
{
	if (addr > 0xc000)
	{
		switch(addr)
		{
			case 0xc01c:
			return page_2;

			case 0xc054:
			page_2 = 0;
			break;

			case 0xc055:
			page_2 = 1;
			break;
		}
	}

	return m[addr];
}

function peek2(addr)
{
	return peek(addr) + (peek(addr + 1) << 8);
}

function pull()
{
	s = ++s & 0xff;
	return m[0x100 + s] & 0xff;
}

function pull2()
{
	return pull() + (pull() << 8);
}

function poke(addr, value)
{
	if (addr >= 0x2000 && addr < 0x6000)
	{
		// mark scanline dirty
		var scanline = offset_to_scanline[addr - 0x2000];
		dirty_scanlines[scanline] = 1;
	}
	else if (addr > 0xc000)
	{
		switch(addr)
		{
			case 0xc054:
			page_2 = 0;
			break;

			case 0xc055:
			page_2 = 1;
			break;
		}
	}

	m[addr] = value;
}

function poke2(addr, value)
{
	poke(addr, value);
	poke(addr + 1, value >> 8);
}

function push(value)
{
	m[0x100 + s] = value & 0xff;
	s = --s & 0xff;
}

function push2(value)
{
	push(value >> 8);
	push(value);
}

function imm()
{
	return pc++;
}

function zp()
{
	return peek(pc++);
}

function zpX()
{
	return (zp() + x) & 0xff;
}

function zpY()
{
	return (zp() + y) & 0xff;
}

function abs()
{
	var addr = peek2(pc);
	pc += 2;
	return addr;
}

function absX()
{
	return abs() + x;
}

function absY()
{
	 return abs() + y;
}

function ind()
{
	 var addr = peek2(pc);
	 pc += 2;
	 return peek2(addr);
}

function indX()
{
	return peek2((peek(pc++) + x) & 0xff);
}

function indY()
{
	return peek2(peek(pc++)) + y;
}

var opcodes = 
{
	0x00: function() { ibrk(); },
	0x01: function() { iora(indX()); },
	0x02: function() { pc--; },
	0x03: function() { iaso(indX()); },
	0x04: function() { pc++; },
	0x05: function() { iora(zp()); },
	0x06: function() { iasl(zp()); },
	0x07: function() { iaso(zp()); },
	0x08: function() { push(p | 0x10); },
	0x09: function() { iora(imm()); },
	0x0a: function() { a = asl(a); },
	0x0b: function() { ianc(imm()); },
	0x0c: function() { pc += 2; },
	0x0d: function() { iora(abs()); },
	0x0e: function() { iasl(abs()); },
	0x0f: function() { iaso(abs()); },
	0x10: function() { branch(0x80, false); },
	0x11: function() { iora(indY()); },
	0x12: function() { pc--; },
	0x13: function() { iaso(indY()); },
	0x14: function() { pc++; },
	0x15: function() { iora(zpX()); },
	0x16: function() { iasl(zpX()); },
	0x17: function() { iaso(zpX()); },
	0x18: function() { p &= 0xfe; },
	0x19: function() { iora(absY()); },
	0x1a: function() { },
	0x1b: function() { iaso(absY()); },
	0x1c: function() { pc += 2; },
	0x1d: function() { iora(absX()); },
	0x1e: function() { iasl(absX()); },
	0x1f: function() { iaso(absX()); },
	0x20: function() { ijsr(abs()); },
	0x21: function() { iand(indX()); },
	0x22: function() { pc--; },
	0x23: function() { irla(indX()); },
	0x24: function() { ibit(zp()); },
	0x25: function() { iand(zp()); },
	0x26: function() { irol(zp()); },
	0x27: function() { irla(zp()); },
	0x28: function() { p = pull(); },
	0x29: function() { iand(imm()); },
	0x2a: function() { a = rol(a); },
	0x2b: function() { ianc(imm()); },
	0x2c: function() { ibit(abs()); },
	0x2d: function() { iand(abs()); },
	0x2e: function() { irol(abs()); },
	0x2f: function() { irla(abs()); },
	0x30: function() { branch(0x80, true); },
	0x31: function() { iand(indY()); },
	0x32: function() { pc--; },
	0x33: function() { irla(indY()); },
	0x34: function() { pc++; },
	0x35: function() { iand(zpX()); },
	0x36: function() { irol(zpX()); },
	0x37: function() { irla(zpX()); },
	0x38: function() { p |= 0x01; },
	0x39: function() { iand(absY()); },
	0x3a: function() { },
	0x3b: function() { irla(absY()); },
	0x3c: function() { pc += 2; },
	0x3d: function() { iand(absX()); },
	0x3e: function() { irol(absX()); },
	0x3f: function() { irla(absX()); },
	0x40: function() { irti(); },
	0x41: function() { ieor(indX()); },
	0x42: function() { pc--; },
	0x43: function() { ilse(indX()); },
	0x44: function() { pc++; },
	0x45: function() { ieor(zp()); },
	0x46: function() { ilsr(zp()); },
	0x47: function() { ilse(zp()); },
	0x48: function() { push(a); },
	0x49: function() { ieor(imm()); },
	0x4a: function() { a = lsr(a); },
	0x4b: function() { ialr(imm()); },
	0x4c: function() { pc = abs(); },
	0x4d: function() { ieor(abs()); },
	0x4e: function() { ilsr(abs()); },
	0x4f: function() { ilse(abs()); },
	0x50: function() { branch(0x40, false); },
	0x51: function() { ieor(indY()); },
	0x52: function() { pc--; },
	0x53: function() { ilse(indY()); },
	0x54: function() { pc++; },
	0x55: function() { ieor(zpX()); },
	0x56: function() { ilsr(zpX()); },
	0x57: function() { ilse(zpX()); },
	0x58: function() { p &= 0xfb; },
	0x59: function() { ieor(absY()); },
	0x5a: function() { },
	0x5b: function() { ilse(absY()); },
	0x5c: function() { pc += 2; },
	0x5d: function() { ieor(absX()); },
	0x5e: function() { ilsr(absX()); },
	0x5f: function() { ilse(absX()); },
	0x60: function() { pc = pull2() + 1; },
	0x61: function() { add(peek(indX())); },
	0x62: function() { pc--; },
	0x63: function() { irra(indX()); },
	0x64: function() { pc++; },
	0x65: function() { add(peek(zp())); },
	0x66: function() { iror(zp()); },
	0x67: function() { irra(zp()); },
	0x68: function() { ipla(); },
	0x69: function() { add(peek(imm())); },
	0x6a: function() { a = ror(a); },
	0x6b: function() { iarr(imm()); },
	0x6c: function() { pc = ind(); },
	0x6d: function() { add(peek(abs())); },
	0x6e: function() { iror(abs()); },
	0x6f: function() { irra(abs()); },
	0x70: function() { branch(0x40, true); },
	0x71: function() { add(peek(indY())); },
	0x72: function() { pc--; },
	0x73: function() { irra(indY()); },
	0x74: function() { pc++; },
	0x75: function() { add(peek(zpX())); },
	0x76: function() { iror(zpX()); },
	0x77: function() { irra(zpX()); },
	0x78: function() { p |= 0x04; },
	0x79: function() { add(peek(absY())); },
	0x7a: function() { },
	0x7b: function() { irra(absY()); },
	0x7c: function() { pc += 2; },
	0x7d: function() { add(peek(absX())); },
	0x7e: function() { iror(absX()); },
	0x7f: function() { irra(absX()); },
	0x80: function() { pc++; },
	0x81: function() { poke(indX(), a); },
	0x82: function() { pc++; },
	0x83: function() { poke(indX(), a & x); },
	0x84: function() { poke(zp(), y); },
	0x85: function() { poke(zp(), a); },
	0x86: function() { poke(zp(), x); },
	0x87: function() { poke(zp(), a & x); },
	0x88: function() { idey(); },
	0x89: function() { pc++; },
	0x8a: function() { itxa(); },
	0x8b: function() { ixaa(imm()); },
	0x8c: function() { poke(abs(), y); },
	0x8d: function() { poke(abs(), a); },
	0x8e: function() { poke(abs(), x); },
	0x8f: function() { poke(abs(), a & x); },
	0x90: function() { branch(0x01, false); },
	0x91: function() { poke(indY(), a); },
	0x92: function() { pc--; },
	0x93: function() { iaxa(indY()); },
	0x94: function() { poke(zpX(), y); },
	0x95: function() { poke(zpX(), a); },
	0x96: function() { poke(zpY(), x); },
	0x97: function() { poke(zpY(), a & x); },
	0x98: function() { itya(); },
	0x99: function() { poke(absY(), a); },
	0x9a: function() { s = x; },
	0x9b: function() { itas(absY()); },
	0x9c: function() { isay(absX()); },
	0x9d: function() { poke(absX(), a); },
	0x9e: function() { ixas(absY()); },
	0x9f: function() { iaxa(absY()); },
	0xa0: function() { ildy(imm()); },
	0xa1: function() { ilda(indX()); },
	0xa2: function() { ildx(imm()); },
	0xa3: function() { ilax(indX()); },
	0xa4: function() { ildy(zp()); },
	0xa5: function() { ilda(zp()); },
	0xa6: function() { ildx(zp()); },
	0xa7: function() { ilax(zp()); },
	0xa8: function() { itay(); },
	0xa9: function() { ilda(imm()); },
	0xaa: function() { itax(); },
	0xab: function() { ioal(imm()); },
	0xac: function() { ildy(abs()); },
	0xad: function() { ilda(abs()); },
	0xae: function() { ildx(abs()); },
	0xaf: function() { ilax(abs()); },
	0xb0: function() { branch(0x01, true); },
	0xb1: function() { ilda(indY()); },
	0xb2: function() { pc--; },
	0xb3: function() { ilax(indY()); },
	0xb4: function() { ildy(zpX()); },
	0xb5: function() { ilda(zpX()); },
	0xb6: function() { ildx(zpY()); },
	0xb7: function() { ilax(zpY()); },
	0xb8: function() { p &= 0xbf; },
	0xb9: function() { ilda(absY()); },
	0xba: function() { itsx(); },
	0xbb: function() { ilas(indY()); },
	0xbc: function() { ildy(absX()); },
	0xbd: function() { ilda(absX()); },
	0xbe: function() { ildx(absY()); },
	0xbf: function() { ilax(absY()); },
	0xc0: function() { cmp(y, peek(imm())); },
	0xc1: function() { cmp(a, peek(indX())); },
	0xc2: function() { pc++; },
	0xc3: function() { idcm(indX()); },
	0xc4: function() { cmp(y, peek(zp())); },
	0xc5: function() { cmp(a, peek(zp())); },
	0xc6: function() { idec(zp()); },
	0xc7: function() { idcm(zp()); },
	0xc8: function() { iiny(); },
	0xc9: function() { cmp(a, peek(imm())); },
	0xca: function() { idex(); },
	0xcb: function() { isax(imm()); },
	0xcc: function() { cmp(y, peek(abs())); },
	0xcd: function() { cmp(a, peek(abs())); },
	0xce: function() { idec(abs()); },
	0xcf: function() { idcm(abs()); },
	0xd0: function() { branch(0x02, false); },
	0xd1: function() { cmp(a, peek(indY())); },
	0xd2: function() { pc--; },
	0xd3: function() { idcm(indY()); },
	0xd4: function() { pc++; },
	0xd5: function() { cmp(a, peek(zpX())); },
	0xd6: function() { idec(zpX()); },
	0xd7: function() { idcm(zpX()); },
	0xd8: function() { p &= 0xf7; },
	0xd9: function() { cmp(a, peek(absY())); },
	0xda: function() { },
	0xdb: function() { idcm(absY()); },
	0xdc: function() { pc += 2; },
	0xdd: function() { cmp(a, peek(absX())); },
	0xde: function() { idec(absX()); },
	0xdf: function() { idcm(absX()); },
	0xe0: function() { cmp(x, peek(imm())); },
	0xe1: function() { sub(peek(indX())); },
	0xe2: function() { pc++; },
	0xe3: function() { iins(indX()); },
	0xe4: function() { cmp(x, peek(zp())); },
	0xe5: function() { sub(peek(zp())); },
	0xe6: function() { iinc(zp()); },
	0xe7: function() { iins(zp()); },
	0xe8: function() { iinx(); },
	0xe9: function() { sub(peek(imm())); },
	0xea: function() { },
	0xeb: function() { sub(peek(imm())); },
	0xec: function() { cmp(x, peek(abs())); },
	0xed: function() { sub(peek(abs())); },
	0xee: function() { iinc(abs()); },
	0xef: function() { iins(abs()); },
	0xf0: function() { branch(0x02, true); },
	0xf1: function() { sub(peek(indY())); },
	0xf2: function() { pc--; },
	0xf3: function() { iins(indY()); },
	0xf4: function() { pc++; },
	0xf5: function() { sub(peek(zpX())); },
	0xf6: function() { iinc(zpX()); },
	0xf7: function() { iins(zpX()); },
	0xf8: function() { p |= 0x08; },
	0xf9: function() { sub(peek(absY())); },
	0xfa: function() { },
	0xfb: function() { iins(absY()); },
	0xfc: function() { pc += 2; },
	0xfd: function() { sub(peek(absX())); },
	0xfe: function() { iinc(absX()); },
	0xff: function() { iins(absX()); }
};

function step()
{
	var i = 12600;
	while (i > 0)
	{
		var ir = m[pc++];
		opcodes[ir]();
		i -= c[ir];
	}
}

function irq(){
	if (!(p & 0x04)){
        push2(pc);
        push(p & 0xef);
        pc = peek2(0xfffe);
        p |= 0x04;
    }
}

function nmi(){
	poke2(pc);
    push(p & 0xef);
    pc = peek2(0xfffa);
}

function asl(b){
	p &= 0x7c;
    p |= b >> 7;
    b = (b << 1) & 0xff;
    p |= zn[b];
    return b;
}

function lsr(b){
    p &= 0x7c;
    p |= b & 0x01;
    b >>= 1;
    p |= zn[b];
    return b;
}

function rol(b){
	b <<= 1;
    b |= p & 0x01;
    p &= 0x7c;
    p |= b >> 8;
    b &= 0xff;
    p |= zn[b];
    return b;
}

function ror(b){
	var c = p & 0x01;
    p &= 0x7c;
    p |= b & 0x01;
    b >>= 1;
    b |= c << 7;
    p |= zn[b];
    return b;
}

function inc(b){
	b = ++b & 0xff;
    p = (p & 0x7d) | zn[b];
    return b;
}

function dec(b){
	b = --b & 0xff;
	p = (p & 0x7d) | zn[b];
	return b;
}

function add(b){
	var c = p & 0x01;
    var d = a + b + c;
    p &= 0x3c;
    p |= !(~(a ^ b) & (a ^ b) & 0x80) ? 0x00 : 0x40;
    p |= d > 0xff ? 0x01 : 0x00;
    a = d & 0xFF;
    p |= zn[a];
}

function sub(b){
	var c = ~p & 0x01;
    var d = a - b - c;
    p &= 0x3c;
    p |= !(~(a ^ b) & (a ^ b) & 0x80) ? 0x00 : 0x40;
    p |= d < 0 ? 0x00 : 0x01;
    a = d & 0xff;
    p |= zn[a];
}

function cmp(b, c){
	var d = b - c;
    p &= 0x7c;
    p |= d < 0 ? 0x00 : 0x01;
    p |= zn[d & 0xff];
}

function branch(flag, status){
	var offset = peek(pc++);
    if (!!(p & flag) == status){
        if(offset & 0x80) { offset -= 256; }
        pc += offset;
    }
}

function ibrk(addr){
	poke2(pc + 1);
	push(p | 0x10);
	pc = peek2(0xfffe);
	p |= 0x14;
}

function ijsr(addr){
	push2(pc - 1);
	pc = addr;
}

function irti(){
	p = pull();
	pc = pull2();
}

function iand(addr){
	a &= peek(addr);
	p = (p & 0x7d) | zn[a];
}

function iora(addr){
	a |= peek(addr);
	p = (p & 0x7d) | zn[a];
}

function ibit(addr){
	var b = peek(addr);
	p &= 0x3d;
    p |= b & 0xc0;
    p |= a & b ? 0x00 : 0x02;
}

function irol(addr){
	poke(addr, rol(peek(addr)));
}

function iror(addr){
	poke(addr, ror(peek(addr)));
}

function iasl(addr){
	poke(addr, asl(peek(addr)));
}

function ilsr(addr){
	poke(addr, lsr(peek(addr)));
}

function ipla(addr){
	a = pull();
	p = (p & 0x7d) | zn[a];
}

function ieor(addr){
	a ^= peek(addr);
	p = (p & 0x7d) | zn[a];
}

function itax(addr){
	x = a;
	p = (p & 0x7d) | zn[x];
}

function itay(addr){
	y = a;
	p = (p & 0x7d) | zn[y];
}

function itxa(addr){
	a = x;
	p = (p & 0x7d) | zn[a];
}

function itya(addr){
	a = y;
	p = (p & 0x7d) | zn[a];
}

function itsx(addr){
	x = s;
	p = (p & 0x7d) | zn[x];
}

function ilda(addr){
	a = peek(addr);
	p = (p & 0x7d) | zn[a];
}

function ildx(addr){
	x = peek(addr);
	p = (p & 0x7d) | zn[x];
}

function ildy(addr){
	y = peek(addr);
	p = (p & 0x7d) | zn[y];
}

function idec(addr){
	poke(addr, dec(peek(addr)));
}

function idex(addr){
	x = --x & 0xff;
	p = (p & 0x7d) | zn[x];
}

function idey(addr){
	y = --y & 0xff;
	p = (p & 0x7d) | zn[y];
}

function iinc(addr){
	poke(addr, inc(peek(addr)));
}

function iinx(addr){
	x = ++x & 0xff;
	p = (p & 0x7d) | zn[x];
}

function iiny(addr){
	y = ++y & 0xff;
	p = (p & 0x7d) | zn[y];
}

function iaso(addr){
	var b = asl(peek(addr));
	poke(addr, b);
	a = x = a | b;
	p = (p & 0x7d) | zn[a];
}

function ianc(addr){
	a &= peek(pc++);
	p = (p & 0x7d) | zn[a];
	p |= (p & 0x80) >> 7;
}

function irla(addr){
	var b = rol(peek(addr));
	poke(addr, b);
	a &= b;
	p = (p & 0x7d) | zn[a];
}

function ilse(addr){
	var b = lsr(peek(addr));
	poke(addr, b);
	a ^= b;
	p = (p & 0x7d) | zn[a];
}

function ialr(addr){
	a &= peek(pc++);
	p = (p & 0x7d) | zn[a];
	a = lsr(a);
}

function irra(addr){
	var b = ror(peek(addr));
	poke(addr, b);
	add(b);
}

function iarr(addr){
	a &= peek(pc++);
	p = (p & 0x7d) | zn[a];
	a = ror(a);
}

function iaxa(addr){
	var b = (addr >> 8) + 1;
	poke(addr, a & x & b);
}

function itas(addr){
	s = a & x;
	var b = (addr >> 8) + 1;
	poke(addr, s & b);
}

function ixaa(addr){
	a = x & peek(pc++);
	p = (p & 0x7d) | zn[a];
}

function ixas(addr){
	var b = (addr >> 8) + 1;
	poke(addr, x & b);
}

function isay(addr){
	var b = (addr >> 8) + 1;
	poke(addr, y & b);
}

function ilax(addr){
	a = x = peek(addr);
	p = (p & 0x7d) | zn[a];
}

function ilas(addr){
	a = x = s = peek(addr) & s;
	p = (p & 0x7d) | zn[a];
}

function ioal(addr){
	a = x = (a | 0xee) & peek(addr);
	p = (p & 0x7d) | zn[a];
}

function idcm(addr){
	var b = (peek(addr) - 1) & 0xff;
	poke(addr, b);
	cmp(a, b);
}

function isax(addr){
	x = (a & x) - peek(addr);
	p |= x < 0 ? 0x00 : 0x01;
	x &= 0xff;
	p = (p & 0x7d) | zn[x];
}

function iins(addr){
	var b = inc(peek(addr));
	poke(addr, b);
	sub(b);
}

	var viewport;
	var canvas;
	var cpu_running = false;
	var rom;
	var last_fps_mark = 0;
	var frames = 0;
	var timer = false;
	var color_lut = new Array(256);

	function $(s)
	{
		return document.getElementById(s);
	}

	function load(file)
	{
		//$("status_text").innerHTML = "Loading " + file;
		var xhr = new XMLHttpRequest();
		xhr.open("GET", file, false);
		xhr.overrideMimeType("text/plain; charset=x-user-defined");
		xhr.send(null);
		if (xhr.status != 200)
		{ 
			return null; 
		}

		return xhr.responseText;
	}

	function clear_frames()
	{
		var ctx = canvas.getContext("2d");
		ctx.fillStyle = "#000000";
		ctx.fillRect(0, 0, 560, 768);
		invalidate_scanlines();
	}

	function make_color_lut()
	{
		for (var c=0; c<256; c++)
		{
			// 7 pixels * 32bit(rgba) * 2pixels-wide
			var row = new Array(4*7*2); 
			var dst = 0;

			for (var i=0; i<7; i++)
			{
				var p = ((c >> i) & 1) ? 0xff : 00;
				row[dst++] = 0x00;
				row[dst++] = p;
				row[dst++] = 0x00;
				row[dst++] = 0xff;
				row[dst++] = 0x00;
				row[dst++] = p;
				row[dst++] = 0x00;
				row[dst++] = 0xff;
			}

			color_lut[c] = row;
		}
	}

	function draw_frame(canvas)
	{                   
		if (cpu_running == false)
		{
			// firefox runs scripts concurrently??
			return;
		}

		var scanlines = $("scanlines").checked;
		var ctx = canvas.getContext("2d");

		var imgd = ctx.createImageData(560, 1);
		var row = imgd.data;
		var y0 = (1-page_2) ? 0 : 192;
		var src0 = (page_2 ? 0x4000 : 0x2000);

		for (var y=0; y<192; y++)
		{
			if (dirty_scanlines[y+y0] == 0)
			{
				continue;
			}

			dirty_scanlines[y+y0] = 0;

			var dst = 0;
			var src = src0 + scanline_to_offset[y];

			for (var x=0; x<40; x++)
			{
				var c = m[src++];
				var clut = color_lut[c];
				for (var i=0; i<7*8; i++)
				{
					row[dst++] = clut[i];
				}
			}

			ctx.putImageData(imgd, 0, y*2+(192*2*page_2));

			if (!scanlines)
			{
				// render twice
				ctx.putImageData(imgd, 0, y*2+192*2*page_2+1);
			}
		}

		var py = -page_2*384;
		canvas.style.top = py + "px";
	}

	function change_image(image)
	{
		if (initialized == false)
		{
			initialize_apple();
		}

		cpu_running = false;
	
		var bin = load(image);
		var offset = ((bin.charCodeAt(0) & 0xff) | ((bin.charCodeAt(1) & 0xff) << 8));
		var length = ((bin.charCodeAt(2) & 0xff) | ((bin.charCodeAt(3) & 0xff) << 8));

		m = new Array(0x10000);

		for (var i=0; i<rom.length; i++)
		{
			m[0xc000+i] = rom.charCodeAt(i) & 0xff;
		}

		var ptr = offset;
		for (var i=4; i<length+4; i++)
		{
			m[ptr++] = bin.charCodeAt(i) & 0xff;
		}

		$("floppy-image").style.display = "none";

		reset();
		pc = offset;
		cpu_running = true;
	}

	function update_debug()
	{
		var on = $("debugon").checked;
		$("debugtext").style.display = "block";
		debug_enabled = on;
	}

	function reset_timer()
	{
		if (timer)
		{
			clearInterval(timer);
			timer = false;
		}

		var fullspeed = $("fullspeed").checked;
		var ms = fullspeed ? 1 : (1000/60);
		timer = setInterval(tick, ms);
	}

	function fps_update()
	{
		var now = (new Date).getTime();
		var diff = now - last_fps_mark;

		var fps = 0;
		if (diff > 0 && frames > 0)
		{
			fps = Math.floor((1000.0 / diff) * frames); 
		}

		$("fps").innerHTML = fps;

		last_fps_mark = now;
		frames = 0;
	}

	function on_keydown(e)
	{
		var c = e.keyCode;
		if (c == 116)
		{
			// F5
			return true;
		}

		if (c >= 'a' && c <= 'z')
		{
			c = c - 'a' + 'A';
		}

		switch(c)
		{
			case 37:
			c = 0x08;
			break;
	
			case 38:
			c = 0x0d;
			break;

			case 39:
			c = 0x15;
			break;
	
			case 40:
			c = 0x2f;
			break;
		}

		for (var i=0; i<=0x0f; i++)
		{
			m[0xc000+i] = (c & 0x7f) | 0x80;
		}

        	return false;
	}

	function on_keyup(e)
	{
		for (var i=0; i<=0x0f; i++)
		{
			m[0xc000+i] &= 0x7f;
		}
        
		return false;
	}

	function tick()
	{
		if (cpu_running)
		{
			/*
			if (debug_enabled)
			{
				var ir = m[pc];
				$("debugtext").innerHTML += "PC: " + pc.toString(16) + " IR: " + ir.toString(16) + "<br />";
			}
			*/

			step();
			draw_frame(canvas);
			frames++;
		}
	}

	function initialize_apple()
	{
		var container = $("apple2stage");

		rom = load("Apple2e.rom");

		var viewport = container.appendChild(document.createElement("div"));
		viewport.style.width = 560;
		viewport.style.height = 384*1;
		viewport.style.overflow = "hidden";

		canvas = viewport.appendChild(document.createElement("canvas"));
		canvas.width = "560";
		canvas.height = "768";
		canvas.style.background = "#000";
		canvas.style.position = "relative";
		canvas.style.top = 0;
		var ctx = canvas.getContext("2d");

		make_color_lut();

		document.onkeydown = on_keydown;
		document.onkeyup = on_keyup;

		cpu_running = false;
		setInterval(fps_update, 125);
		reset_timer();

		initialized = true;
	}

