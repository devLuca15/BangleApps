// MIT License - James Milner 2021

const mandelbrotBmp = {
  width: 176,
  height: 176,
  bpp: 8,
  transparent: 254,
  buffer: require("heatshrink").decompress(
    atob(
      "mdXkoAFmctgMBmcsq4EBAAkslsIgWCmcJrGCq8zrwCBrsICwwABhEsrwADrACBq8JgcDhMtDwIABhUKmlexGIsmIAgIKBxGsrwMCnQACBIIBBAQIGB1eIr4IBxIAC1mr1mt2et1mz2es63Q6/W63X6ACB0nO5vH0V5q+BxGCwN6q0rV8kyVwsySoKlCWAKWGq4OBlqLBmdYrtXgQFBroBBC40CEQOCQYKqCAAKVBZ4MthNe1mCNYM0hVeRQIGCmicBAYKuBV4VeVwKdCxFlsoJBBgSvFXAOkV4OPVwQAB1er6+yVgK1B1Wq52q0ejztWwOA1dWRQKvklksV4ssltXVQwAEXIKwCAIMCAAkIDYNemSxDBgdXP4NYVoaqBRIOCTgOIBwIFBiFYAwSnCnQSBmkQiE0YQLFBXQKuCCoOJ1gmBr4VB1gMBWAIEBWwSvD1mj54EB560B63W5/O53N0ecV4N6vUsVkYACq6vFlddmczV5pnBAQOCV4qxCq9YYAMIgMtboLDBli8BlqsBmizBV4qnCWASrBVwVkxClBB4VeToQHCU4KmBT4IIBsgHB1eyVYgAC1oHBWAeyAYOr1StB6qvBVwOjvNXvddq9WqxbBV8auFAAItBltXVhFXTgJvCrFYlqvHAAISBB4MswLVBrAKBruImavChSWBr06CYOCTwIABxE0WAM0rAyCCAKjBYoWIsqnCXwKjDB4OrBQKkDWQKvDW4XPWIavC5/P62q0avB5uivWBvVXwGlwOrqyvjq6vHmczrqvHgKVBMoKNBWgMIVIaoCmYGCroFBYgOIT4ILBq9elqvBRwKhBVIQFBAYU6BgYIBAoM6nWCVwKpCAQKnCBIKvCI4KnBAoSiB2WzVQWt1qlB6HW6wIBCgQGB0nX6CvB52j0d5wIABq4+BwKvkVw+BTwMzlkCliuEXYNeNoVeq6mDgUtr0JloIDBoLFBUAYnBhMDgcJwQICwSYDFIIFDAgSfDCYLmBxFkBwNkTYSeDUYgEBV4OtWAIAB2Wr6C1C6/X63X1nP0nO1YGBBIPV5/P0eizlzp5/Bq5FBwErV9IwBUgKvBUQKwFmY9Cr1YX4SnEgQZBBAqvCmctls0EoIeBAgKlCTAQEDWQSqCWYQKCAQeJBQIAC2QDCVQWJ1qjCAoILDZYPWAwOr6/QVASmBAoIDBVYOq53N0YABzl5p9WHoOBvSvtWAMt1mCV4q7CVoKlFmadBAwYJEr2CmcJhIlBBASVBT4WlQAIAEBgNkUQK0CsqwDBYIIB1mtSwOA56cBWQIhD2ezXQWr62yAAOz64MC2fPVwPW0YPBVoPW52p6nNAYPN0WczqvBwOrq0rV9adBlqRDmdXWIkIBwK/BAwKlCXQNdDAIADq9dTASuCEYMJmiWCV4WkSYKPBSISlB1ivCslfA4OJBYQMBAAXW0lWvWk1fQ2SzBWIaZBVYPWAYOz1ioBAgXP1QLBAQuk0fV0ej46uBAIKvCvVWgCvpTgKoBVYSlBRwIFBWAYACUQICClmBTIKvFrB6BV4demkKV4OsVwSXBwF5vSUBqyQDV4LLCWoQGBXoQCB2Ws6GqvVXq+j5/P66oD2ezW4YMB1er6+r1TEBXoIBB665B52r6oSB6qyB5vG4yvCq97WASxBV80rmddN4NYlqtBwUtV4IBBliwHAATEDWIgFBEQMzV4NdWAM0iACBr2CS4PPWAJiBqGqT4OzWQanCAQOr1oLBWgPW6HO0aBBQAPOUQQMBTwIpBUgOq0idBVIYMBAgWq6HWVAPO1SuB54oB5uj0SvBqGBAAOC1mAlavmkssFgKvBr2BgUIAIMIq9YmcyV4wCCmdYTYOsmawCZoIXBVwMJEoOIW4IABTYKfC5/NztXq965+yBIOJU4IPBVQSrB2a8D1V6ruCq9P0epWAKpB6GsAQIGB1N6vSgCXoKzC63OV4ILBVIIAB1OjzquBAAOi42cucsq0twWtwNPV88llqMBmdXliVBAAawBBIMsVwoUBTQICCr2CmYNBgYADV4KtCnU6V4SVB6yFCmd55vP1iwCVgQGBA4YWC63QV4LHBktzRgKSB1QCBUQOqT4Ojq1dq4OCBgILBCQKrDCoIECCwPNAQOd0WcvN5p8llmB1l6qyvhlctlklq4DBAAKaBSYQABmcIWAUzT4SyCBINe1esr00VoKxCr0thKuDlqnBxAQBWIOIr6ZCN4NXrt5PIXWVQPWAIqsCBYKKCvWClslp9zvKxB0d65qyCSYNdwOBqwNBXoYCBUYOq5oVB56rB5rsB0fMV4XGzlzudJV4NWV0UAEwKdBlstgMlgKuBq6fBlgMBWoajBCYNelkCXQMzxGIr2IrEJAANXUYNXq8DmcJmasBxE6AQIACS4V5q0zp6EBTwPP6GrUwPQ5+rA4LDB6wFCRQNWwMzliiBGINzq1XWYS1CwMtgQqCAAt60SqBA4fHWAIHB42jVwNzzmduclRAKwClavglqQBLQNXlkBFwOCVIStBloFChFdmifB1YXBAIINBXQM0lqvCAAKwBxC9BAgIOB1gDBV4mr0l7YYNzPQPO5yiBVYXP0lW5y5C5/WAgPO0edPgLgCxGrrsIWgNWzuczlQwNYBAVzvWd0Wizt6rt6zisEVQIABzgQB42ivOcp9zpLiBrus0tWV8EzrCVBSgKvCL4KpCq4DCAAUzmgSBY4QMClk0OwKrBBoNYAgOCEIOsUwKsBWQWCxFk1mswFWp9Qq9POAKwB5uq0eqUYN6qGd1POA4OqAQILBQANXwMshEzWoOCAQNdqF5udPwI4BBQNXrtWBQKXBwIFBW4Wi0YDCVgOc4wSBZ4IDBpMllkz1erV8QABrstq9XWAQCBgUISQKuDllXT4IJBAAOChC5BWwUJlqkCWgbDBBoIXEAwKvB2XP0iiBwR6BPAWdvNXvIEBuaOBQ4N6XIOq1PHCYN5p8lksCluB1eAvWATwNPBgKMBls0VAIABqFPq2INgNPvKiBGgOddYIABAgKuCuYABEQMmlgpBV0CvClqhClszVoKuBAIK8CBgVe1iQBq4KBTAIaBBQIEBVIUQhSvBhSmBxE0mk6nS1BDwIAB1gAB5+qq1dPQVzqFdmVXRAVPlmCdANQzujAASFDQAMCq+CxOswGkxAkBXYUIhNY1elq2BLwNX1esS4LCBD4IFBVIN4VYOc4C8Budyp9JEYKvBCQMsV76UBlihChCwBWIMCGANerGCq4NBSASlCAAIbBZAUzA4KvBmkKAANeNAIHBVgNenVk1lkxGJWAfOvSRBllJq9druBwQ5BliuBwNXW4Nzzud0WiQgLFBV4UImeIQIN71mHmZhBBYMtfQOrveAwJNBIYSYBq8lGYK0CuYnBAAIGCAYIuBkrNBwWrqyvfxFYU4MzSoL2BmeCAwKgBWANeBYKfBVwYOBB4MtgYABBINXC4SvCYoRrBVwM6xGrxCtC2ey62kq1zWAKuBk0lq8twKJBwOI0qHDq9WvN4zqACkrABmYPBvVWq2AqzGBrpNBZoVWlYlBmkzV4Wkq97hOrB4MsUoIABVglJAAMlk0CNAJRBV76eCVYMIAYJGCToKYBUoSkDUYK7DhK8CBYS+CUAKqBAAgICnQNBr1kV4IAC5/O0d6lldqxuBkqlBwOsWQN6ZAJKBryFBQAQRBCQNdCIKiBMIMyvWCwScBdoOrBYVWagOCHwIXCW4IQBZoMyll7q0lpKtBF4klgUICwLSBV70tlkBMQNXVwKDBmYABq9XTYK3CV4ddBANYVIJcBX4MJryGBDoJlBmkQiCvD1gMExOsAIOy6CwCzt5vOdT4MrluCmmC1mlwOrwVYwNdlklYgMsk0CCQOIUQakCbIOlZ4WkBgUr0i5B1eqSgMsW4OJ2a1BrtX1dXVIYAFgUCEoIkDADkBAANXP4NXSgKtBRoKbCrCvCrqoBW4NehS0BBYWsAQIFBUIM0nQEBXgIJBPQOIsqyBAAvW54BB53H0eizucudQwNXlrLB0lXvSWBwAKBgSOBRQQQBsmBV4ukvV6qwADlYKBAAYMBW4OAwGrwAHBWoK+BFoTgBAAMmgKuBhBwBDYQAdTIKbClszrEDVQM0rCRBAIKXDBAKhBxE0hTABBQIIBwUKBYQCBWASrBAYKuCxOJVYOz2Wz1ez1nQ6HOWAPG0WcvNPkpsBrydBlaLBwKJBJwMJrGIWwJDBxHQvUsMIIUBC4IABOZYMBli1CvUqleB2fWGANX0qyBkwBClivCmeBvQpMV6VYr0zq8zR4NerqqCAASSBmiZBTwQBCU4OrUISvBWoICBVwM6VwQNBAYNkV4QXB1qvBAAOr1fP5/O0fN0awBudJkz1B1l6TAMyRIKpBmhPBw9WruA0iTBq0yPzLKBWgOAEINW1mkvcsAAMCVoIABV4NeCAKvdgWCVgYAFS4KTBSga1CmgUCiCdCnQIBXwUQV4KqC1llAoVfsgHBxIBBAQOr2Ws5/W5+q53N5quBvFPktXwOrT4KcEq2BHwOC1mAlaJBlasZAAwkBFwOr1QxBwFXVgKwBloABmmBIgoAYmbSBTwRgBMYQFBVwOr1YFCVok6wVYUwIICXwYABYwmIxIiD1ioBWIWr2fW6+r63QV4OjV4OdudJV4V6UAKDFwIgBvYMBVcAAGGoIABdQNXQ4MJhMtAIM0wQ4er00QIWrRwSJDAAOdBQiaCV4NewSuCDoM6BAIZBDwymBAAIHB2ezGAS1B6HQ63W1fP6qvB0d5q8sVwOrwKuFAAOA0itpAAkyvV6H4OBWAMtVwM0rxGIACtXq+I1beBP4SDBAgXPvIECxKbCUwWCxCwBVQIABnQNBsjMFU4Os1oDBWgOz1apB2QEBVYPP53O0fH0eivNWwLhC1l6UgsrqyttGQujvVeq80mavCxFWkgqbrCTD1iwB1eqvN50mqGoOr2SUBTwWIP4QABr2CAgQKCCAIGBaYizE1nW2ey6/QWYPQ54AB0epVwOcvNPlkthM0wN6qxREVuCxGvVdr06V4eBIwoAWr0zrCaC0uj0d/52qvVzqGd56VExKkBVAS1CXYK8CVwTFB1VW0ioB2QBBAQOsVAKsBAIPP6Gq5w2BAAOiztzp8lgUIq4kBWAwA1WIeCrwABsuIeDlXlteEoOI1esAIKGC515vOjRAKvCPYI4Br+IWoKrDxLBE1eAq2jUwKxB1YlB5+j5ywDFoKuBvV5zoABVwSvCmZFB595OYMkWPeBwWJAAOtwKvbhFXmk0TYKXBSYey1fOztQ0eq0gLDVQSvCDIWsxKlB2anCvNXDIOqVYIAC0dWvSxB1StBVwOjqGBp6tBq0smUCq6uC1mlqxpbAETuBOYOJNgNWETVemkzrGCWAaxD2SLCq1z0nQBIQOCHYIDCCoQGB2QEBDINXUwOdWQXO5t6rtW0fN1WpVoOjztWwMmlkswIABq9ew4EBvRnbAEsrq2C2ez6+lezU0WAMthKwEsmsbIOqp9Xq9Q0fQ2QJBAAIDDVAQHD63W5/P52dqFdq95VAPHaQNXua4BAAPN0eizlPVIKtDwGrxGrq0rlit/WAmB6/X574aq+CUIMzVoM0wSwBxCYB0l5RgOd53P2SnFxOJVgeyVoOs6HQ5yeBZYOBqCwB0S3Bq9WWAN5WQIJBztPlksmeIwAPBWYOlV4Kr/AApLB63V0hLZlkthEzrEtmk0r06V4fQ595qCvC5/WWASqCVgQSB0gOBAAPO1WjTgNXxFXp6nBvNPkzjBkoJCzmcudPkslliqBwFPMoNWU/4AImWk53NJrMBmder0zVwOCnVeV4NkTwPQ1SwBvOq5/QBIKyBAAOs63W1fPvWjVgQACq1XwOBmclp4ABUQWBBYMsBIVPpMlk0tHANdlcAlYCBAH4AIlek42eJzEswVeq5yBAAU6WYOI1imB5+jWAKgB5yxB1YMB64CB5/P515q2dztXuedvNPFQOCmcBq8ykslVgOrwOClksq4JBXQMChM0xGrq0sUf6wNvWcqyvYVQUJhMtWoOCO4KvB2SgB0dzT4OjWgOqWIIBC5+qBQVdqFPmcsqErUAOCwMthFXq8shEJr2rwGIq9emcCk0Crq7BXgOALrCw3q1PlYaWOoMzWAMtWIK2CV4KwB1ejq1QTYNQmdW0fO1asB53OvN6qFWwSiBruBU4NdruI1eIawOBwVYFIOswF6xCoBq8CgVXwV6q96V34ARqsrV69dq8zPoMzgYEBWAes2Wrq16zudp6bBp+j4/OVwPNztWUwStBUgNW1gDB1YBBwGsVIOr1ml0qiBq2l0mAdYMJmleGIMALa4A6lcskoYVgUsgVXwUtgdYVoM0xCvB5+kvKmB1V6qFQllQzt60ej0SuBqC8Bp8rEIOBr0tEIWC0l6VISoBAYMrmQDBvQUBCIOIZQKu/ACkslqvWAAMshCyBr1YxFYPYOrvN51XQWgOqVINzq8sVQKrCvOdzoCBvIHBrrWBmczhFe1iuBfQNXAYIAEZgOssmJV34AYrpXVQgKwBhEzr0JhM0r1eV4OsAIOs2WyWIOjqysBq4ACvK5B44CBXoMlq8lAAMmawOswCrCJBFWwOzYAYA/ACsrwKvVlsClquCrCuCr2CxGIVwOsQYIAB1VWzqlBvStC5wAB1XN0VzXINPAAKwBq+B0tWq1VHhNW5+kV34AZqtPCqcthMtq+IV4KyBrwFBAYQABxKuC2WkvOq5/PVoXP1fP1SxBXINWud5ztzp8srrPBUAMrV5QZBSv4AalQUTq6kBmisBq8JAAKyCWYSwBsiUB1mr1es6ABB54BC63W1awCAAOizl5p9Xq4jB1dWHhUrqC8KAH4ARgITSgUyryoDAAMthKsBnU0mirBWIKwC2QCC6wBC2XP1fW5+q53N4+i0WduclgVXxGAV5kzSX4AwgUChEsrusrCIBlstWYOsr00xGCr2IxKxD1mzAYWr2fW6+r6HW53O0fN0edp8sq9YxGrV5dWlZ+/V+MBWIMzq8tgSuDmeCmgEBnU6xFkxC5BWIKvBxOs2SvB63QWAPV5/O5uivNXruBwOswCj/AH0sVwIACmctmatBhMJhU0wU6sleVQOCr2JVYIABxCuB1nQ62z2XP62q52q0edp8sr2lvVXq1WOX4A8mcCgKuBhFXryuBWIM0mirBAQIADxFlxAAC1iuB1mrAQKvB6HQ52j4+cucswLCBwOAvSwHlUqPn4Ahg6vQgIABlksUIM0hMtAYNewWIWgQABwSXBslfr6vB1mJxOt2Ws63X62q53N0edqFdwOCDQWqq0rlY5DldXRn4AzlivDQgKpBhMJmYEBr2IAAILBiAGBVQK5BAgWr1uJ1nQ2er5/P5yuBvNPwNdrsIhOBvV7wFWAAdQWogA/AD9PB5yuChEtVINerEzWAKxBmimCWgM0WoWrV4usV4IAB2avBVoNQp8sq8llgBBmeBEYOB1el1WjqyK/AElVqqvOgUsrteq8zrCxBWActW4M0hU0WIM6nQPBryrBAASsB2ey1nP1V6q+BAAKyBp8lksJZwLPC1nWwErRX4AlwIONVQKoBQIICBAASwDhNXmleVwSwDxGJAIKuC2WzTYPP0mjvNWqFQvNzudPlmBq8IboKxB1dWRH4AmmcyBxtXq8tAQKBBxGsxFehMDgcJXIIHBWQKxCxGIsqvB1ivBVwOrWAWq1Oj0ei0WdziwCgUChEJnWsvUrRH4AmgMtNJkshB/BAAUtwWrU4KuBgczwSnBV4QEBX4VlsgEBAAS0C6ywC5ywEzqwBkosBmgtBqyv/AFEslgNLVogABmaiBr0zV4UtU4U6miwGslfryvE6HX5/P6ywC46xBV4jUBwNXqyG/AFErldPV5ctmcsWAgABVwVXr1ewSpBrywBWIKpC1iwCW4Ws1fW2fQWIPP5ujV4OcV4LvBbgOBvUrQ34Apq1PNhUzrEzq6vDAAcDmeCsirBUIKwEAoSvBVwOs2Wz2eyAAOq63P5yvB0WiVwMllmBwLBBV/6vszl6BhNXlszmauGlteAAOCAQKiB1mIV4U0r06nSuE1ivB1nW1fQ6Gq52j0ecq1XhFdwN7vVWqyE/V9Z3BNxNYVpFXVQNYmkJAIWrV4UQVwKrBxAABXYOy1us5/XAAPW5/O1XHV4NPq9XwOBq4+BkiE/AFek5ukmILHUoNXVgUzlszwSuBmcJAAdYUoNeiCvBVIOIsuIxOJXgOJ1mr6/Q5/P1XO1Oj0Wduclk0JwOkq1WlaD/AFd653PwBwHliwBr1dluC1gFBr0thMtrADBhMKmk0VwNewWIV4SrBAAa5B2SyB5/O0ejzmcvNPkslGAOI1d6kiD/AFdW1fW6FWBY0Cq9XrFYmkzxCEBmaqBWgSvChUQmitBAAKmBsoDCAAfWVwPWV4N5q1zudQkssgUImmIwA9HAH4Aller6/X1ZyGgUClirBmczr00VISvBmk0Voa7BXAVeU4NkAYWz2er2SvB6HV53OztXqzbBbwIqBnSvBlaC/V9uBQoOzwNQV49XltXrFYT4MtV4SwCmmCVwU6AAWI1gOBAYOs2QAB1fW62q52j0VzlmBwKtBAYITB0ksQX4Atq2z1uJ1lWlavFAAMzmiZBr2CVwKwDVYOIAQIPBxCwCVoYAB63Q54ABVwOp0edV4OCwISBvVWq+AvI6EAH6vq1mJAAOBWAkBWAajDr0zlqvBltXBASvDAAQTBV4Wy63P0isBAAOj0d5VwOB1mA1mBV4MAlbqFAH6vqwOJR4KwFgSwCmeC1amCWISwCmanCwU0mmCVoTSBWAKuCq2dzqtB0edp9XEwOAvStBVwIABlav/V+U6T4NXq0kV4KwCq9ewQMCVANeV4IABXYawCr2s1lkVwOy0igBEoNXp95vNPruHwOlwOAwFWlh8/AGUrwKuBSQM6wSMBgCtBWAUsAAMIluC1lemauBlq2CVYNeDoOCVoIKB1nQ1WjvNXwVXrtXAANdmc0wOr1iwBH4aA/V99WwSQBAANert5q0BWASvBmctgSvBVAMJgcDWIIYCV4a1BVwQAC5+jq9WVoVzp9QktXwOCr2rcYMsqyzDAH6vsvSQBlsthMzr2BV4SwCrtXWgUtWgKuBV4NXWoMKmkQiCsCxGJWAer0mj0d6zudzmcvNPlmBq8zwN60uB0iv/V+FWrqvBhKwCq96VoMsAAMzXIMIWISuCBAIABxADCwSuCsmJxOs2es62r5/O53N4/H0ecudXlkmgVXDIWrV/6vwvWBmkJhEthCyBwUBgNXrterEzUYVXAAc01YJBV4eIAAVlTIOs1oCB63Q6vP1XO0fN0V5qFPkssq8JmmIwCv/V+FWwMzV4IAChOBlksrqiCABKnCmk0r06nVeVANkr4DB1mJV4PW1fQ5/PWAIABztzWAMChFewOBlaA/V996wFXhECAAcIrEzmahBr2CmcthIABmdYwSwCnSuBxFkWAKqBBYNkxOIAwOr2eyVwOq53O4+i0WcV4Msls0xGlqyA/V99WwMzV4SyDVwKWBAAStCrE0AYKqCXgIEBVwU6CoasB1mz2YCB1nP63Q1fO0ejV4VXq+BEIOkV/6vxvSvCk0lgMmgVerEtq4DCVwS0EUQSvBrCzBAINewSYBVwWyWAXW1nQ62q53NV4Odp8lruA1dXqyv/V+Gk0mAlkCkoADr0zmigBwUzVIU0mgEBmmI1avCAoKpCAYIEB2WsxIIB5/X63X6HP0nO0ejztzp8swN6Vv6vzq2BmcCgKvEgUCq9exFeq6vCU4MKAAILCVwK/BVwVlxGJVgOr1oDB6GzAwPW5/P1WjvNQkquBAAKwBHwKA/V+NXgSsCp9JpKvBluITgNYV4MzVIOCVIMQAAQFBVwOsVwKvD1gDD1mz1fP62q515GgI1Bq+CWIWAvUrQP4Atq2k1WBliuBpNPp8lV4NXV4UzV4VerwHBWYKsBAAVeCQNlsirCAAStCAAPWAAPO52jvNQGYUzq7WB1lWV/6vv1es0tWkqtBp9zuavBVAVelsDhMtVgQACAoOCBAerxFfVIIAB2Ws1aqB1nPAAWq1Wj0edvNzpMmgUJa4N6liB/AFssq2BlsmktJVoKvDgUtAAMDV4NX1imBmiwEUwIJBWQQHC2YAB1ez63XWYPP6vP53N0eizlzp8lk0zwOAqyv/AF1Wq1XwKuBp59BzqvDgStBgctV4M0wStCr06UwOIsqzBXAauBWAQCBVoKxC1XO0fN0SvBvKvBgSvBwMrlaB/AFkrq2r1dXk1JudzvPAzkzltXAANdr1dUIMQAQKsBUwOr1iuCxOsAAKvB1mt1nW2WsV4PP5+r53NAAOj0V4vFPFgSvBwNWQX6vtwOz1hzBp9PvOcued1ihBrE0rAEBVIU0mleUgNesgIB1mJV4OyVAK1B1qrBVgXO1XO53P0fHVwOizt5p8slkJrGI1d6laD/AFdWwCWBwNWVwWcvPGToMthM0hMzVwSyBAgKiBAgavC1es2YAB1mrWgOr0fO1IBB0ej5vHVwOcztzp8lk0ChI8CV/6wuwNdllPuatB0XG0VYrysBnU0mivFxFk1gABVwIABxOs1qwC1fWAAPOvV7vOj46tBWIIuBuYABV4MlhFXV4N6qyC/AFUrllWvWBqyvC0WizvGUwMJlteWgKtEAAKqCAAWt2awBWIKwB2SxB5+qztXqDXBAAWcqAyBAAKuBksCmbdB0qv/AFatC0qvDvKwBzmjVIUJq6uEVAWy1mk6wGDV4Or2Wr6wKC6HQV4NWrtPzudzmdvNQwKsClkCAALgCHwMrQv6vq0uIxOsq9Wued0XG0XNltdxEzhOCV4Wr1Wr1fP5151es62yAIOs64CB63X6HP5+q52jvNdq9PbgNzp8lq6sCq8zhEIV4WIWAKF/AFN6wNkwWlwWBvOcznG4/NgUzr0thIDBQIOs0l/vN5q155yjBWQOsWQPW2es54EB1SwB0educsWIMskslk0zwIGBFoVXmk0nTdBV/4Apq161dePQOBTQOi1PN0ejlsChKBBxCvCWAOs1V6WAOj5yhBVAIBB1fP6AFB1eq5whB0V5lddwMthEzhFdcgIABwIDCxFkxOywEsQ/6xqwFXk1PVwOiVwKcBVIIADwU0V4OI2Ws5+jq1zzt5vKlB56yC1YcB5yuB4+jzlzljdBEQICBwWrvVdAQOBwGB0us2XX1dWQv4AmlcrV4NXwKXBzivBRYPO6tehIACr2ImmCV4Os1nQ1V6mYABuejC4IADAwKtC0S/Bp8srul0qlBwOsVgMrq1WAQQAB0rMBBYKJ/AEtQNoOA0h8Buei0fNAAKUBVgSyBmk0WIOsryvB59/vIABqFXqFQVQQABvS4B0Wcp4ABpMlloeB1Y2BvSsCeY0yq2kztWRP4Akg1W52BxCuBqF5zmi4+jVwKvDVoKuBr06SQKyB1ek5+q0edq9WAIK2Budzq1PXokllksls0xGkTwNWkhHKldWli8GAH4AdM4OIwSbCq1zzmj0eqVwOjV4NXVgOIAQIECV4Os2XW5/PvIYBvN6UwNXruClkyp9PkoIBmddVwOsV4KePlkzRf4Ajq2AwU0mmC1ctwN6SwPP1SeBmawBVQNkr00VwOsWoKwBWIPQWIPO1SyCq8swOBlkllksruBxGrDYOAVyAABrsqRn4Ahll62WClsJQQNeV4XN53OV4NYV4MJwWsWATEBWQIAB2axGWAOdqFXxFYlszwWIvWkvQCBVyQABCaYA/AB1Wq2BrszgUsAgKDB0fOS4PP60zgavBryqB1iwBTIIAB1mz1qwB62s5+qWAVzlmI1eCwWHwGAq8rkiuUAH6xm0uBllPud5R4PN53Q63W1ctgawCmiyBmlYVgNkAQIAF1fW1XNztQq8zruBr1eWgNWGgKu/AG0rPQdXvWBp+dVwPO53P5/Q5/WVwMDltXSoKXCVgVeWIWy2ez63XDAPOvNWp9PmUChEtmmIq1WVzEHSP4AdPIIABvV6q2Bq2d4/N52k6vW5+q2SuBhOCxCsBr06AAKrBWoKzB2ey1iuC6HOaIOdvNPkslmeC1erGIJQXlcqSX4AbleA1eAq+s6GBwWBzuj53O1fQ1mr5+zmajBwWsxE6mixCBIK3B1my1oVBWYIkB1XO4+jziwClstYYOAV7EAwKT/ADdW0ut1eCr2BWYNQ0fH52k62r63X62zB4KwCr00V4KuCxAACVgOJWYOz5/Q5/O1Oj0SvCgUzZwN6lZSYmYaZAH6uBq2BVgMtlqaBwNz0ej53P62qV4XXmivCUoM6AwIEB1mIxIABVwICB1jKC1XOEYOdp8sVwM0VwNWKbMsliV/ADErwGAwMzhEIhMzr17uedV4XP1SVBWAMJhMKrCgBr00mmCWANlWAms6Gy63W6AdBV4VWq9XwOHwN7V7VWuYcaV3t61et1kzgUChGBxFWBYKvB62s2Wz2es1c0WANe1avDryoBslkAYOsCgWy1jMB52p4+izlzksmmdYxGrV7bVBWH6uWq2kSoNXlkBksswKiBq+BvXO5+r2eyAQOzmkKhM0xGIVwKvBAoOsr6wCCoKvBVwOqQ4Oj0WdudPksCmeCV7mq5+Alab/V6ixCwNXgUlAAKsBAAMyq+q6HWSwKvChQACiAACV4IABaAICB1mt1nQ6Gr0d5zudziuDmcImYTBvSRZqxCB1aw/VypbCvWBrslp9zud6BAOjwGr6GyV4Oy2eymlYVQIDBVAOIAAQFC1mIxKyB6HOvVXq9Qp9PlklkytBCYWkqyvZ1mJ1uBqyw/KyKvEwGIq8sued0Wj0ep53PVwOsAIIAB2aoEAAapCAYIABCgXW63P0d5qAqBq+BmcImeC1er0l5V7ErV4NksmsWH6uROIhcB0mBrtzVoPNVoXP63X6GsxIAB1leWAM6mk6nVeVwNlWAez2Wz1ez1nQ1QlBztPlirBDgOswFWRoNXR69WwOIr00dYIjBUP4AMleA596OgNWq9Xq2AwNW0eq52q5/P2aUBAAOJ1YCBNgOCmiyCr2rxFkBgISCAQOy2QeB1SwB0V5qEsq+CwCKBVa5YDvWBVwMtH4JVBErYAulVWKoOI1mkq+kwOrvWlV4XO1fW63Q2erWISzCDAOIOINer06nQGBV4ILBxLCBDgPWV4PO1Op0edp8lgVYG4NWTIpaUqxYBr0zhMJV4OB0l6E4oA/NIdW1eCnWJKQOCr2swGIrqvB1SOBSYSsBAAWs1esVYKwCxAAECQSyB1my1jOC53N4+ivKvBq4yClhFEq6wTq16vWChMIgUIq8zE4UkaSquwqwABwFemeIKYMJwWsvVdllX0nO6CYB2SoBTIYBBxE0miyBmgZBxOJCAQAC62y2bOB5/O52j0d5qElk0Jr2rqyGFIgKORLQOrwOBlsCAAMIhFYBAJnCWP5TE0ulq+AmcCq9XKoNXKoVQzujRwKYDUAOJxAGCsisBAAVexALD63WYAPW6Gr6CuC5vH0V5cIMzq+IHgKGBVwek0iNQUAWBmktwMCkzXBLwJZBwC8BvUsV39WwGARQJLBlklAAcChOCwNW0fO56XB6+r1uJWQivBwVeAAIiBV4Wr0mq1XP6AAB6yuB0YACzlzkszCoKEBCwOAWQWlFoOlAoMkLRl65+kwUzVoQAClldq9ewJCBwCv+llW0hnBr00wVXKgNJp9JV4MIruBvSvC1ey2QWB1urV4s0nU6VoWJNgOs0lQvOj1QdBAQPOztWvN5udPllXQAOIZYQFBVoWCaAV6ldWlZYFki7BV4OrZoOHLIlPktXA4MshM0xAUBCoIhGAGcrmVWNINemcJUoMsp9zP4JVCwVWzqvC1mzAIOyAYKvCAYNlr1knVe1iUCB4OrqywC52q1Wp4+dqAwBlktq6sCmcsH4NewIIBwQFBnWsvV60mAVAVPAYNWwF6AYOBmldrtXVwRaBLYQABhFe0oYDEIMkVmroEKgOBmcCgSuCvOducswKwBp6RB0fP5+yU4IAExNlAAOCRAKWBsiyBAAPP515lgeCAAWdp4pBVoNXlksq8zko+BluImkIq8IhEzxGCEYOywFQKgN61elBIOrvWBlpZBrsyLQWczl5WIUzwN7q+AwIYBva0BPQiuuq4HFq2lwRzBKYOdzpTBp5gBk1Jp9Wq+j1avCxOsxAABAYasBAAVkBQOs63Q5+jvNQa4N5AANzPgQ2BcoIsBAYNJktXw6zBlkmgQGCrE61mAq0qq16G4NecAOBrxYBkssrtPLQOivCwCBQOCwOBwGsJwOBZoN6WQKtuq15GIwJBwFdllzzmc0QABvVdwVXllXruBqyvDOQYABUwSvEAwOt2es2XP1SwBmdPlijBQoNeFQLlBXANWAYNzGQLnBktJWwMzq8IhFYw+rwFXvWlxEzlte1deCoNPuYABVoIADzjiDrpbBwUtrBQBEYMrPASspUYN61eqV41W0l6wKABKgOj0fH0awBwIABRgOAV4KcB1lkr1kWQM6r2swS5BxGJxOr1us62r5/O0edToNemaZBcQMsXAKJCzroBzqwCIAKXBkrABkoJBmYwBvWAG4MsgSdB1ZXBud4zipB0fGLYKvCq4lBlkmAYMChE0xGBPYaEBqyyjlcsE4NWwGsQAKvFGoKOBr1dq+dKQOp1SNB0d5q960YCB56tBxABBsms1eInSwBryuBBgQCBV4PQ5+qaQMswVVwKfEqFQFwPN47kBGYIJBua3BztPq1Pp8lk0trzyCr0Cli6CfgMruauB0fH5vNE4LZBqC9BD4NPqDTBaIOBvaoEwGkvSJBmUqVjjSCq2kfAJRBr2sFgI1CkgRBBYMJllzOoPOAAPP5/O0mkAoOkwGr2TPBUoesryvBnTOBry5B2YRBAIOraAVzliFBwFXkqIBzl5q2j1XN5wCBcYVPSwIABzt5vNzp8mmeC0uCVIMmTQVPWINPzquBVoQ2BAYIlBrrUCEISvBmeBPQKLCYAOz0uB0gJBlksla+EVaAABq16vQHBUAKJBrEJQgOBwDdBq1XCYOAxEzV4R5B1fW5/QWIPQ6Gs63WTQKtCAAauCry4EVoQeB5ySBVwNXwQABMQKICcQWq5+qcoKvCHwPH5vH0axCqCLBwSPBkokBTYOdvFPY4QYBEoImBAQIlCzogBAAOcudJk0tr2rqx2BAAOrr2CLIIJC0l6lgMBAQSfBllVU4QKBDgYABagIZB1ijBll6E4NXmcChMzxGrvWk1ekvd6wOswOBq1553P6ywBSoICBTIQACUoNeAgKwDr1kxGJCQfQTIedliMBp8skyHBvLfCGIIAB6o0B52pV4KKB1WpXwPHWAIcBV4MsktPp9QZ4LQBvNdq4nB0blB52r1TYBWgPNXYWjV4LMBLYOsvaLCq+BrC5B0t6q+ASgOB0qCB0ukvMsmUrV4S1BqBOB0urSwIWBJgOIEAN6wFXgQABhEzwOACAOICQIWB0mBmdXvRRBSYPWPoOzVgesxOIsixBfoJYBWoKwBBoLDD595PYN5qEzll5zoIBqCOB0Z/BVwQVBcYPVYwN6BoSVBXALPBp9Xw9ehEluecXgSbCp9dp+j1OqEAJXB5/WWQLfBBgIUBq1Xrp4B1aDB1eIwVXhECq+CvQOBNAKXCxOzCgKtDAAcrwBvBDwNeTYNYmeCwDQBwNXkoABFIOBFINdmczRwOk0uCmVzOIJ6BSoICB2etFIKvDsoEBmgACWINemisCAQPQNgKlBU4SABAAWdqGjVoTeBboOycQXP0mkHgIAB1azBRgIABmZUBqF50XH4+q1PNb4NXq5XBHIKtC5/VFAIyB53NYoN5p8sPQOlq2k1lehNXgUlWAKUBrsJQwRpB1mAliuGAAMswOInU0hNemcIFYK1Crslp9Pkq0Bk0slkCgUJrAPBCQRXB5/Q6/WU4OJTQKvBrylBWYICBVoMQAAKwCYYKZB1iuBvI7BvJ9B1WqAQOpXQOd5qgCGAOyV4PXDoKRB6C0B6C4B52jvV5uczwWBlgnBFAIABFIQQBa4XQ1Wr6wiBAwPVV4PO0mj0V5kstEQOlwOAwUskoABkzRBgUzgUIQwJnB1dXVxAABqyUBlsIDYMmaAdXllPuZXBCIK0BWoMsrqOBL4MsmSvCSYOyVgWJVINfUYSxCV4QFBrEKAYKtDVwNQUYNQQoKXCAIKXBq1Q5yuB2asB1es1aqBAwIBBBYKTBEgKPB0edp9dq9WqwoB5+qB4QQB0jKCDYPQbIJZBMAIKBD4KvCmWBRgOBawVXQwNPQoK0CAAKxBmmBvdWV5bOBlsCDIbQBq0rVoOdzmdWIIBBF4NXrurGQMmp9QCoJfB1mz2avCWANfQgOInU6U4KvBeYNehU01hmB1Wk0d5vOj1Wjv6kBTYPQWIOqvN60YJBb4LgB1oxBRwIDBWga8BDAPO5udlldp5cBDoKdBYASjB6AXC2RWBV4JbBIoI5BD4OjzlzlmBwUsqFPliuBvOcvKwBp4ACksIhJrBvSvLlbTBq6vBDQQIBllPVoOiAAguDX4KTBqGdzt60mrOoIADxGIstlAoNeVwKvEAYU0r3P0dQVgXPPYOrVoSlC6yXBvIRB56mBVIOt1uJAoLjCBQSRD62qaYL6BFgPO5yaBXoPX6AVCFwRZBcYIEBAYK0BdAIfBvNWq9WqFzOINWq150Wj0WdvK0Bua7BwNdwOlq8rV5VWwF6rqvBuYABp9XwNWzooB5vG0YsB4ywCbQOCCAIOB53PVglkUoIABA4SvCAYKqCAAM0rFe0dPvWjVgJyBPYQBBAQIABQQKwB1QNB1oKCRYKrBA4a0BSoQWB5/OV4IsB52qVwSrC66kBCwIdB2TJBAwI4BH4PP6weBvNXq6sCPgK3CAYPNQgWiziwBlkyWIN60lWV5erP4NXqDLBzjQBPoXHFIYCBFYVzktXwWCHIPO6ByCKoOsr6tBVAKvCWAStBVwK7CwUthN5DwOrVYaVDTgWIRIIGB0jfBBgIpCVwKvBF4QWBWgSRB6HP1WdmYuC5+r6/WEgSkBKYQgCGAYfB6wLBD4Ojq2BqytB5up1SAC0eq1Oj1PHQgSSBksCQwOrq8rV5MrwB4BktPzuiUYInC5pQB53O6oIC0QpCbIMrqx9BSAQADsipCwVeAAOCA4QICBwLmBmcJZoQdCPYKfDAQSgDAAYKBbYaOCFYIGBSIIHB6Gy1ZXBp9XzvN1XQ1YxB62rFASpBcQQFB1olBDwS+BDwKvBrtP0WpPoOq1QDCQoQQBQgOczqFBk0twWlqyvISIIABLgNWV4XNa4IpCV4IvBFgPNXYNzq0srtdvKQB55vBOARUBxFkA4Nemk0iEQmiKBAAQEBr0zlqvBVwYADDwIRCxCgDVoQHBxFfaYITDAwesToavC0d5q95LQOr2YABFwSkCGoY7FWoOz63Q0lWq9dqxuC5/W5/VAQS1C1KvCvNPllXV4OBUgSxFVwOk1erwGBFIOdZoLWC53Q6HV57tBBAOjzo9Bq9XubBBBoKRDOQOJsqJCVwIACWIi6Br1YhIAB0nQOAakCZwSwDslkZgeCbYgHBsozBCgKbCR4Wy6GqVwMszqOB6C5BWAWt1alCBIIeBA4KvE2QFBZ4NPZ4IfC5+qVoOrOgIEBRwPHcQNPksswJOBwGr0rOBWQStBq2ALAOH1dektPVwQpBbgQvBFQKwCFINdllPuecd4eyAAOtSYgCBVoSGBr0QhUKVoNewWCV4RuExFfBoKbBTQSqCQQTLCbQQNBVIIGCwQUCR4QmCR4NzR4Oj5+sfwS+CE4LGCHATpCZ4ZgBOgOqqyvDKIPQ67TBFoKyB1SEBzlWwNXwIACUgJYBWIUAgFW0hRBmdeCANWJIOp52kagWq1mrKQTbB0d6wVXp+dYgerNgZ9CnSUCVwQfBAoKvBAAKIBq6vCY4eIsihCC4IABPgS0CUATMCxE6F4LiDnTICDQQABKYOjvMzqF51auBb4IPDUwdfdAQIEEAmqvWj1XP62yVYPWZwOy63X56ECqFdQgMrq8zmeBRgJNB1avDwGImcIq8sCwN50T6BFgOr677C1gqBWYPOztWrtPYgKvBBQJhBfoKCBPQSvDNYOrr00U4KvBmiwBV4QOBVgKWES4IiBZoQEBEoVeiEQAgLeDwQjBDoVlSoIhBQoKvBq1QSAhNCGQa2BsllUoI3BVoQNCWAWk0mrEwInBQIOrA4XW6DZBV4NWwKDBvNzp8swMtgUtV4QABvWkwMzk0lkssmSbC5yuB6DWBF4IrBWQKvBvTRBmdWzqwC5xiCCgNkAIKBCV4QABVwUJmlYSQNXV4YACZQSlDwQcBAAKgBVwS2BAQTAFmk6RAWsV4Ws6GkvMsp6vC2Wz2ZOBr7CCY4NlCwOCEwIFBsjQDAAXQaoS9BD4OsV4Os64lB6DhBq6BC0WjvNXlahBruBwOr0l61eIwMsktPp9QwNXq965/PFQSzBFoLaBWQIbBvNWrtXp9zq15zoYBIwRQBP4U6RISLCU4QKDAwUtshoCSgJuBOwKuEiDPBDAIOCaYKIBB4YACBgWrAYRVBwGjztXvKvBF4JKCagTlCHYQGDWAINDVAKtCVgIOB2Wy1uJxKDC2er5+AzquB0fNAQN5vNzqFXgVdEgKvBmkzrtQvOczqcBCYPP62yEgIyBHAnW1nP52jEYNXDoIDBq2kYYJSCPQWCAwKXBAoKpCXAUzV4VXPIaUDAggkCiCJDEAM0hQDBbgjBBCgM6nSvD2XW5+qvJqB1SvCfgLCB1gUBXATJEAwRGCAATBEAQOtAIKDB2Wz2XX6HPGQPO53N46wBzl4p8lksCmeCwOsWwMlp+c0QRB0b5Cb4bcDAoQLC1ejp6rBvN6vNXueAV4uCSQesQgQKBVQQAElqVBBoQcBUwIICO4WChQiCsgIBmlYrwFBCAQtBV4IaCRggAB1VWvWk0iRCBoYUBnQhBdYavDBAWIsoVCZATKC2Wr1aCC2es6yDB56yCWIKcB0WcuawBhEJrzYCmavBvKsB5wZBD4ImBxImCTgLfBcQIAB6F6LoN6DAOjvNWZIKvExCvCUAMtq+CQINYVwszXgaoCrEKwRyDAQIIBhQGBAIOrKoNXGQITBV4gfBTAaLBBgOrqukMoKcEAgLoDVwZTCBYQMBWoQvBWYNfCoQhCV4SBC2XWSYKvB1fP5upV4h4BKYWlr1dmdWV4KuBJIIiBUwJiC1i1BKgTbB1mk1YTBb4Oqud6MYc6shYCwSiBgcDAYNdUoUzlstBAIWBXYM6mhnBO4IQBEYJ0BVoMJhQKCrAbClrVCCwU0iAHBmgiBEYQAB1nPvL5EAAKjDYoSuDiEQV4k6DwTwCAASvCQAKBB1oABAgPQ2eyVwPW1XO0eivKuBksIwOBmczr2rAoNQV4QWB6Gy2avCAAQtCHoQAG2WkqGqMgZfBKQWCmavCAAUtmaNDAYNYrxtCFYa9BmeIBgOCmjCBWQIGBEoYCBW4QOEHQQCDEwWr0hJCUwKnCiDABboLGCAgIKCdASlCXgWCDoOrWoaABPwiGBPoOs6/W5/PV4N5q9dlksOgUskszmUyrtXvSvBDIIAEr1fF4ItBsgFEWYurvV51auDI4VeVw0DgUJWAk0AYUKmgzBwVYlqZBWIVeAoISBYINXAwInDrouCCATkBc4TLBH4avCWwSdBBYQ6CT4IEBDQSwBG4M6A4IMBXAJiDDwJ5CawQBBVwOz2ey63W6CvDq1Xk1dwOBxFXp9zqwCCq+j5/Q62rD4LXB1j9DxFlFoQFBBQQFCWIRlDJYJPBM4SACq9erEJgQABq8zDYIQCV4QaBUASfCloMBDIKYDEgUzmYPBFALDBDwScC1grBAAS3BQwRTDc4SeCA4OCCIWrBIJXBWYK7DYAS5CAAIhBstlr9fGoWyAAOrV4IiB62q0ejvNPmeIp+Bllzzmd0ecWAOj53QZgOtV4QqB1mCFIQBCnRcBJwIHCAAS8CAAOsmkJhSYDPwQhBlqwCgVe1YHBmYQBSIQFCV4UDDYSpDVwS1BwSwBUgIHBnQcBFoIIBbYiNBVYiYCIQU0EQJaDAAU0KwIWBCoRmBEISuCNIJ0DslfboWtSQKtB2fQ5+q5ykCmbeBr1PVoPHBYN6qGj0nP2QaBFAVlEoSbCc4ZTCIYI9BAwKtDKQaOClqOBBIOrEIKvDhCTCRAKxBDAKlChIHBWAVXr1YBQSzCEgVegUtC4Q5CGYLMBhL6DUIIADSoQMDq9XrBpDVAUKAAK2DsiOBZIhxCDoKFDAYWsxOJ2WyVwIBBUYOjucswUsllXvPO5y8Cq1Xq2kV4KXDFQTwBAAIEBGwNkA4QQBsiOCXgJjCAoMJmkzPQKSBEQILBVwSwCgUzTAKgBrCjDCwIJBYgRBCV4aZCq4NBV4IvCAAjJBBYKZCfIb+BUAIeDDQISCCgQdChU0PQRxBHIMKB4S6DdgIoDWgeJ1nP63X1fW1Wq0edp8swMsued0fPXoXP0ekvOqV4VkagM6VIRYBiA2BUQI7CUgStBX4JMCmcDhKbBlpcCCQQHBlivEAAKlCSYrFDEYIQBloeBwQnBEYVXDoSQCVoktlqvBhLYCAYIsBDgL2CKANdYYZRBK4LrDhSwBCoOs1dYM4TUCAAZACDQOJAASxB5+y6HQ1XO0ejqEzq9drt6VwWs63WAQWr1ZvBAAKvCTwQACiFYHQSsCAwOCKYT3CKoKXBNYQAFVw8CrqnBSgIYBlszMAOs1QnBCAMIYIYADrEIlodBIYNXVYI1DEQMDRIYsBUgIvBXQTHDBQILBGwI8CryuBMoNYEwLeCPgopDRQNlWAIEB2ezAQKiB53N0ecp5rBp9QvWq56tCAAquDMALiDbYVeiAECXwT3CB4MJlwSBhNY1lXQAL3CAAKBBVw8Cls0BYNdCIIWBGYSFBC4cJb4KOCHIOClkzAAQZCrACBI4S8Bq9Yd4K8BFYMCH4SkBAAawCJgS9BHgIwBA4QACNgI8BQQSvDR4NksiUC2ey2XQVwOjzt5p9Xq9Q0ejq2k6AQB1mJVwyLCPIU0nRfB1bzBhTzBBoT9Bq4UBVYJ1BKwRzBNILFCSwMzroKBAAKABQgQiBA4Q3CrAEBljBEmeCwSmCxGrxEtlhhBDIQCBPYWrCYIYBrylCq+CwIDBf4IABloaCq6vBKoNXhIfBBQS+EdYKFDRQNeiEQV4WIsjoCAAKvB1WjvMzqFWqyuB1XO52rVoOz1urWALXCDgLYEAAVkSYJTBhQKCegJEBgaTBBgJqCMAMzVwNXluBwKHBBQKYCli3BDwNerssQ4RcBAYIABVwgABEgIYBrFXBwK+ChEzK4SLBZobrCAwJRCrEIcYQNBc4RvBLwIUDLIIrBVoSvDWAIhCdQOrV4M0W4q1C1nW5+jqFXq2d0YAB1XP6wABCIQABxLLBDgRABEwICCJAR+BH4UKJYZECgaPBmktMIOCD4NXRwcIlldToQJCOoMtQ4ISBB4KyBwTIBmldRIIAFFoKsCCYMCgMBFgOCwS6CrwZBTIIABq5XCUYRJBdwIACSwZFCJYSsEWgUtNIMtEQQdBAgMQAYOCnSHCTIOz2WyV4NPmd5VgPO5/P1myVwOz1irBDINlZoNenQrBVgNYcIS6CwTpCmiFBI4ZGBNIIQCDYQXBliCBQwQSBQQJ/Clh4BRYIGCAQSdBXIIcBCYSzCXgJsBBQYADFILTCmbIGIYMtDIOsCQJNBSoRRDXYLECaAJlDEoIRCNIIgBwU0PIM0iBrBRoIABE4IuB1nW5/O0dXq6vCVwPW62rB4IABDYLIDEISSBE4IGBlrqCJYIEBH4NXVoRGCSYUzq4XBBQMzQwauBAAMIrszrqRGV4gUBgWBDoKWCYIIsBAYUICYTZCAYTbBBoJMBXo53BAQIaCmb4BWoJnBAYITCA4LGCEYIFBxGrA4MDZQJ9BhQBBhQTBnTTCSYOJ1my5+k0d5mdQzvO1fQBYKlBCAOJxOIsg/BdoQGBTYTQBwUJgYABIoNYegQACCAQcBK4UtwSGCXASvFQ4KwBq6vHTATCDNQSvCloABBAIaDEYQpElhYBrDRDTQo0EYYL4BXAKsDAAUJwQgBMgJ5CQITwBOwaxCmgQBmgUBPQICC1mkvVQNYNz0eq5/P2Wr2ey1qvDsoVBmk0iAhBTgQDBGAKvCWA4SDwKIDNgMtmiyBQoaGFTwJwHYQ4QBRgQDBmdYryeEV5CcBFIcsdoJCBDoIaBIAjXBJgYAEmaUBVgZuBlqtBaISsBBQMKhSHCSAKPBDQNkTIPW5+jvNQq2j53P63WBgOzAQLECAAOCDwSyDcYOCmalBmdeLgQ3BLwIyBYgRvBLAjBCKISSEliHCCoKXBB4h/ChAQDhFdC4KXCDoLDHY40sIIQ1CAAMJq7JDYwtdCYYAENgLOBEIKBBrAMDBAMJBgKoCCAQCBnQHBTISfB6HO0dWll50fPVQWJCAQcCwQFBEgLTCbAMKrBIBGQQKBHYJdBC4KuCLIKVGOQJuDSAIGBEQKfDY4WCBwQdCUYQRDTAMtFIwAEmUsFwKvEDoNXEYlXro/DYopFBCYQUBCAUIq9YKIWs1dXlo9BNYKvBaoR2BVAOsTIUQV4Ws2Wy6HPvNXAAN5V4Oy1mtWQNfsicBnQYBTAIyBFgUKEYKvBH4OIfoQ3BXYLMBIwIKCAAQGCGYIIDCwLYClpyEE4NXlmCCoIA="
    )
  ),
};

function draw() {
  g.drawImage(mandelbrotBmp);
  // work out how to display the current time
  const d = new Date();
  const h = d.getHours(),
    m = d.getMinutes();
  const time = h + ":" + ("0" + m).substr(-2);

  // Reset the state of the graphics library
  g.reset();
  g.setColor(1, 1, 1);
  g.setFont("Vector", 30);
  g.drawString(time, 70, 68, false);
}

g.clear();

// draw immediately at first
draw();
var secondInterval = setInterval(draw, 1000);
