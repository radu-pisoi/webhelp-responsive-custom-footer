<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="2.0"
    xmlns:oxyf="http://www.oxygenxml.com/functions">

    <xsl:param name="webhelp.footer.add.generation.time" select="'no'"/>

    <xsl:template match="*:div[contains(@class, 'footer-container')]" mode="copy_template">
        <!-- Apply the default processing -->
        <xsl:next-match/>

        <!-- Add a div containing the copyright information -->
        <div class="copyright_info">
            <xsl:choose>
                <!-- Adds the start-end years if they are defined -->
                <xsl:when test="exists($toc/*:topicmeta/*:bookrights/*:copyrfirst) and exists($toc/*:topicmeta/*:bookrights/*:copyrlast)">
                    <span class="copyright_years">
                        &#xa9;<xsl:value-of select="$toc/*:topicmeta/*:bookrights/*:copyrfirst"/>-<xsl:value-of select="$toc/*:topicmeta/*:bookrights/*:copyrlast"/>
                    </span>
                </xsl:when>

                <!-- Adds only the first year if last is not defined. -->
                <xsl:when test="exists($toc/*:topicmeta/*:bookrights/*:copyrfirst)">
                    <span class="copyright_years">
                        &#xa9;<xsl:value-of select="$toc/*:topicmeta/*:bookrights/*:copyrfirst"/>
                    </span>
                </xsl:when>
            </xsl:choose>

            <xsl:if test="exists($toc/*:topicmeta/*:bookrights/*:bookowner/*:organization)">
                <span class="organization">
                    <xsl:text> </xsl:text><xsl:value-of select="$toc/*:topicmeta/*:bookrights/*:bookowner/*:organization"/>
                    <xsl:text>. All rights reserved.</xsl:text>
                </span>
            </xsl:if>

            <xsl:if test="oxyf:getParameter('webhelp.footer.add.generation.time') = 'yes'">
                <div class="generation_time">
                    Generation date: <xsl:value-of select="format-dateTime(current-dateTime(), '[h1]:[m01] [P] on [M01]/[D01]/[Y0001].')"/>
                </div>
            </xsl:if>
        </div>
    </xsl:template>
</xsl:stylesheet>
