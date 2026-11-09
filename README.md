# Holder Biotech Consulting website: how to edit

All the words on the site live in the `_data` folder, one file per section:

| Section | File |
|---|---|
| About | `_data/about.yml` |
| Expertise | `_data/expertise.yml` |
| Services | `_data/services.yml` |
| Contact line | `_data/contact.yml` |
| Track record (summary, figures, career) | `_data/track_record.yml` |
| Publications | `_data/publications.yml` |
| Patents | `_data/patents.yml` |
| Social links | `_data/social.yml` |
| Posts | one file per post in `_posts/`, named `YYYY-MM-DD-title.md` |

**Add an item:** copy an existing item (the line starting with `-` and the indented lines under it) and change the text.
**Remove an item:** delete those lines.
**Reorder:** move the lines. Items appear in the order listed.
**Placeholders:** text starting with `TODO: ` shows as a dashed box. Replace it with real text and the box disappears.

Easier option once the site is on GitHub: log in at app.pagescms.org with GitHub, open this repository, and edit every section through forms (settings in `.pages.yml`).
