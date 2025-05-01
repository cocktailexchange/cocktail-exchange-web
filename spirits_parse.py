import csv
import json


class Spirit(object):
    def __init__(self, d):
        self.raw_dict = d

    def json(self):
        st = ""

        if self.raw_dict['Region'] or self.raw_dict['County']:
            st += f"{self.raw_dict['Region'] or self.raw_dict['County']} "

        if self.raw_dict['Age']:
            st += f"{self.raw_dict['Age']}yr "

        if self.raw_dict['ABV']:
            st += f"{self.raw_dict['ABV']}% "

        if self.raw_dict['Peated']:
            st += f"{self.raw_dict['Peated']} "

        return {
            "name": f"{self.raw_dict['Maker']}, {self.raw_dict['Expression']}" if self.raw_dict['Expression'] else self.raw_dict['Maker'],
            "subtext": st
        }


class Section(object):
    def __init__(self, name: str):
        self.name = name
        self.spirits = []
        self.sub_sections = {}

    def add_spirit(self, s):
        self.spirits.append(s)

    def create_subsection(self, name):
        sub = Section(name)
        self.sub_sections[name] = sub
        return sub

    def json(self):
        return {
            "title": self.name,
            "drinks": [s.json() for s in self.spirits],
            "subsections": [s.json() for s in self.sub_sections.values()],
        }


if __name__ == "__main__":
    sections = {}

    with open("spirits.csv", "r") as f:
        rows = list(csv.reader(f))
        header = rows[0]
        items = [dict(zip(header, row)) for row in rows[1:]]

    for item in items:
        spirit = Spirit(item)

        # Add to sections manually
        section1 = item['Category 1'] or None
        section2 = item['Category 2'] or None
        section3 = item['Category 3'] or None

        if section1 and section1 not in sections:
            sections[section1] = Section(section1)

        if section2 and section2 not in sections[section1].sub_sections:
            sections[section1].create_subsection(section2)

        if section3 and section3 not in sections[section1].sub_sections[section2].sub_sections:
            sections[section1].sub_sections[section2].create_subsection(section3)

        if section3:
            sections[section1].sub_sections[section2].sub_sections[section3].add_spirit(spirit)
        elif section2:
            sections[section1].sub_sections[section2].add_spirit(spirit)
        elif section1:
            sections[section1].add_spirit(spirit)


    output = [section.json() for section in sections.values()]
    print(json.dumps(output, indent=4))
