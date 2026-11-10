# Plutonium

Plutonium is a community client for older Call of Duty titles. It restores dedicated servers, mod
support, server browsing and a working player base for games whose official multiplayer is dead or
unmaintained.

- Website and docs: [plutonium.pw](https://plutonium.pw/)
- Supported: **World at War (T4)**, **Black Ops (T5)**, **Black Ops II (T6)**, **Modern Warfare 3
  (IW5)**

::: danger Legal and safety warning
Plutonium itself is free, but it does not include the game. The community distributes game files by
torrent, and that is copyright infringement in most countries — owning a disc does not necessarily
make the download legal. Use a VPN if you accept the risk, and understand that this site does not
host or link to game files. Follow the official docs for downloads.
:::

## What you need

- Windows 10 or 11, 64-bit.
- The game files for the title you want to play (see the warning above).
- A free Plutonium forum account.
- A torrent client if you obtain the files that way — qBittorrent is the usual choice.

## 1. Create an account

Register at [forum.plutonium.pw](https://forum.plutonium.pw/register). The launcher uses these
credentials, not a separate login.

## 2. Get the launcher

Download `plutonium.exe` from the official site. Put it somewhere permanent — the desktop is fine,
but do not leave it in your Downloads folder where cleaners delete it.

Windows SmartScreen will warn you because the launcher is unsigned by a commercial certificate.
If, and only if, you downloaded it from the official domain, choose **More info → Run anyway**.

## 3. Prepare the game folder

The launcher expects a complete game directory, not an installer.

- Keep one folder per title, e.g. `C:\Games\Plutonium\t6`.
- Do not place it inside `Program Files` — permissions cause weird failures.
- A complete folder contains the executables, `zone`/`main` data and the localization files. If a
  file is missing, the launcher will complain at setup time rather than at launch.

## 4. Point the launcher at the folder

1. Open the launcher and log in.
2. Select the game (for example **T6 — Black Ops II**).
3. Press **SETUP** and choose the folder you prepared.
4. Multiplayer and Zombies share the same directory; setting up one sets up both.
5. Press **PLAY**.

## Troubleshooting

**"Missing files" / instant crash on launch** — incomplete game folder, or the wrong folder level.
Point the launcher at the folder that directly contains the game executable.

**Antivirus deletes the launcher** — a false positive on an unsigned binary. Add an exclusion for the
launcher and game folder, then re-download from the official source.

**"Unable to connect to server"** — the specific server is down; try another from the browser. If
nothing connects, check your firewall and that the launcher is fully updated.

**Stuttering or low FPS** — these are 2010-era engines. Cap the frame rate, disable overlays, and set
the game to fullscreen rather than borderless.

**Controller not detected** — enable controller support in the game's settings, and close Steam
if it is intercepting input.

**Account banned** — Plutonium runs its own moderation. Bans are per-account and appealable only
through their forum.

## Etiquette

- Do not cheat. Their anti-cheat is community-maintained and bans are permanent.
- Server admins set the rules; "it is a free client" is not an argument.
- Report broken servers in the forum instead of opening a hundred threads.

## Credits

Installation steps are documented officially at [plutonium.pw/docs/install](https://plutonium.pw/docs/install/).
This page is an independent summary; the project deserves the traffic.
