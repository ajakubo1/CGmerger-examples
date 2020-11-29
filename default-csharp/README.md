# C# default project setup

After cloning this project, just go to this folder and run ``cgmerger`` and the 
``output/codingame.volatile.cs`` file will be changed (modify ``codingame/main.cs`` 
to test it out)

## cgmerger.conf explanations:

```
[merger]
output = output/codingame.volatile.cs
workdir = codingame/
header = ../header.cs
file_regex = .*.cs
exclude_line_regex = ^using
comment = //
separator_start = -
separator_end = =
separator_length = 80
```

- ``output = output/codingame.volatile.cs`` - the output file ``codingame.volatile.cs`` 
 is located in ``output`` folder (relative to the ``default-csharp`` folder)
- ``workdir = codingame/`` - ``workdir`` not changed from the default setting. All of 
 the files from ``codingame/`` folder will be copied to the ``output`` file.
- ``header = ../header.cs`` - the first file contents copied to the ``output`` will be 
``codingame/../header.cs`` (value relative to ``workdir``).
- ``file_regex = .*.cs`` - only ``.cs`` files will be added to the ``output``.
- ``exclude_line_regex = ^using`` - exclude all of lines starting with ``using``. The
 global ``using`` entries are located in the ``header.cs`` file (added as ``header``)
- ``comment = //`` - comment used to indicate contents of different files will be
 ``//`` characters
- ``separator_start = -`` - the beginning of the file will be indicated with
 ``-`` character
- ``separator_end = =`` - the end of the file will be indicated with ``=`` character
- ``separator_length = 80`` - this many characters will be left-padded to start/end
 file comment.