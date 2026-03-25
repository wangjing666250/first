import subprocess, os

repo = r'D:\dev\code\vue\AI\Pillar-UI'
cmds = [
    ['git', '-C', repo, 'status'],
    ['git', '-C', repo, 'add', '-A'],
    ['git', '-C', repo, 'commit', '-m', 'fix: restore Select/Radio/Icon props and stabilize e2e helpers'],
    ['git', '-C', repo, 'push', 'origin', 'release/v0.0.3'],
]
for cmd in cmds:
    print(f'\n=== RUNNING: {" ".join(cmd)} ===')
    r = subprocess.run(cmd, capture_output=True, text=True)
    print('STDOUT:', r.stdout[:2000])
    print('STDERR:', r.stderr[:2000])
    print('RC:', r.returncode)
