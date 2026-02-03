
# Backend-only logic
# UI NEVER touched

import json, os

DATA = 'profiles.json'

def load_profiles():
    if not os.path.exists(DATA):
        return []
    return json.load(open(DATA))

def save_profiles(p):
    json.dump(p, open(DATA,'w'), indent=2)

def add_profile(name, version):
    p = load_profiles()
    p.append({'name':name,'version':version})
    save_profiles(p)
