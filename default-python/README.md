# Python default project setup

After cloning this project, just go to this folder and run ``cgmerger`` and the 
``output/codingame.volatile.py`` file will be changed (modify ``codingame/main.py`` 
to test it out)

## cgmerger.conf explanations:

```
[merger]
output = output/codingame.volatile.py
workdir = codingame/
footer = main.py
header = ../header.py
file_regex = .*.py
exclude_line_regex = ^from codingame\.|^import codingame|^from \.|^import \.
comment = #
separator_start = -
separator_end = =
separator_length = 80
```

- ``output = output/codingame.volatile.py`` - the output file ``codingame.volatile.py`` 
 is located in ``output`` folder (relative to the ``default-python`` folder)
- ``workdir = codingame/`` - ``workdir`` not changed from the default setting. All of 
 the files from ``codingame/`` folder will be copied to the ``output`` file.
- ``footer = main.py`` - the last file contents copied to the ``output`` will be 
``codingame/main.py`` (value relative to ``workdir``).
- ``header = ../header.py`` - the first file contents copied to the ``output`` will be 
``codingame/../header.py`` (value relative to ``workdir``).
- ``file_regex = .*.py`` - only ``.py`` files will be added to the ``output``.
- ``exclude_line_regex = ^from codingame\.|^import codingame|^from \.|^import
 \.`` - exclude all of the relative imports, or imports using ``workdir`` - file
 contents will be merged, no such imports are needed (they will actually cause an
 error).
- ``comment = #`` - comment used to indicate contents of different files will be
 ``#`` character
- ``separator_start = -`` - the beginning of the file will be indicated with
 ``-`` character
- ``separator_end = =`` - the end of the file will be indicated with ``=`` character
- ``separator_length = 80`` - this many characters will be left-padded to start/end
 file comment.