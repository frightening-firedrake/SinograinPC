<template>
    <form class="ui-body-bg">
		<img class="code" :src="codeUrl" alt="" />
		<div class="zw-page" style="margin-left: 113.4px; margin-right: 113.4px; column-count: 1; column-gap: 0px;">
			<div class="zw-header">
				<p style="margin: 0px; line-height: 1.2; font-family: Calibri; font-size: 11pt;"><br></p>
			</div>
			<div class="zw-contentpane">
				<p style="margin: 0px; line-height: 2.16667; text-align: center; font-family: 黑体; font-size: 18pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 黑体; font-size: 18pt;">山西中储粮粮油质监中心</span></p>
				<p style="margin: 0px; line-height: 2.16667; text-align: center; font-family: 黑体; font-size: 18pt; color: rgb(0, 0, 0); padding-bottom: 10.4px; padding-top: 0px; border-top: 0px;"><span style="font-family: 黑体; font-size: 18pt;">面筋吸水量测定记录</span></p>
				<p style="margin: 0px 0.291667in 0px 0px; line-height: 2.16667; text-indent: 4.22917in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">SXZCZJ/JL004-2015</span></p>
				<table class="zw-table" data-node-id="node_044596390722947254" style="margin-left: 0; direction: ltr; width: 6.38889in; border-collapse: collapse;">
					<colgroup>
						<col style="width: 0.83in;">
						<col style="width: 0.81in;">
						<col style="width: 1.15in;">
						<col style="width: 1.15in;">
						<col style="width: 0.8in;">
						<col style="width: 0.54in;">
						<col style="width: 0.54in;">
						<col style="width: 0.57in;">
					</colgroup>
					<tbody class="zw-tbody" style="vertical-align: top;">
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 55.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">日 &nbsp;期</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 55.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.riqi" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 55.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">室温（℃）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 55.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.shiwen" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 55.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">相对湿度</span></p>
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（%）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 55.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.xiangduishidu" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 55.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">地点</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 55.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">小麦品质分析室</span></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 48px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">样品编号</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 48px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.sampleNum" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 48px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">样品名称</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="3" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 48px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.sort" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 45.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">检测方法</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text" /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 45.6667px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.0729167in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">&nbsp;&nbsp;<span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input v-model="formdatas.jiancefangfa" type="radio" class="check_checkbox" name="jcff"/>GB/T5506.2—2008 &nbsp; &nbsp;<input v-model="formdatas.jiancefangfa" type="radio" class="check_checkbox" name="jcff"/>GB/T5506.4—2008</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.0729167in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.0729167in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.0729167in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.0729167in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 0.0729167in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="2" merge="fc" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 44.3333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">仪器设备</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 44.3333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">名 &nbsp;称</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 44.3333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input v-model="formdatas.yiqishebei_mingcheng_1" type="radio" class="check_checkbox" name="yqsb"/>分析天平</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 44.3333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input v-model="formdatas.yiqishebei_mingcheng_2" type="radio" class="check_checkbox" name="yqsb"/>面筋测定仪</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 44.3333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"><input v-model="formdatas.yiqishebei_mingcheng_3" type="radio" class="check_checkbox" name="yqsb"/>旋风磨</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 44.3333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" merge="vmp" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.3333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">编 &nbsp;号</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.3333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.yiqishebei_bianhao_1" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.3333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.yiqishebei_bianhao_2" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.3333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.yiqishebei_bianhao_3" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 43.3333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.3333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">检测编号</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.3333px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">1</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 41.3333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">2</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 49px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">试样质量m（g）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 49px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.shiyangzhiliang_1" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 49px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.shiyangzhiliang_2" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 46px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">湿面筋质量m</span><span style="font-family: 仿宋_GB2312; font-size: 11pt; vertical-align: sub;">1</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（g）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 46px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.shimianjinzhiliang_1" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 46px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.shimianjinzhiliang_2" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 55.3333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">干面筋质量m</span><span style="font-family: 仿宋_GB2312; font-size: 11pt; vertical-align: sub;">2</span><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（g）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 55.3333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.ganmianjinzhiliang_1" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 55.3333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.ganmianjinzhiliang_2" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 52px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">面筋吸水量M（%）</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 52px;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.mianjinxishuiliang_1" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="4" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 52px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.mianjinxishuiliang_2" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 52px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">计算公式</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 52px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<img class="gongshi" :src="mjxsf1Url" alt="" />
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 1.09375in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 1.09375in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 1.09375in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 1.09375in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-indent: 1.09375in; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 55.3333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">平均值</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 55.3333px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.pingjunzhiganmianjinzhiliang" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1px 1px 1px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 56px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">备 &nbsp; &nbsp;注</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1px 1.33333px 1px 1px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 56px;;border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1.32813px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model="formdatas.beizhu" class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative; padding-right: 7.68px;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  /></p>
								</div>
							</td>
						</tr>
					</tbody>
				</table>

			</div>
			<div class="zw-footer">
				<p style=" width:48%; display: inline-block; margin: 0px; line-height: 1.2; font-family: &quot;Times New Roman&quot;; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">检 &nbsp;测</span><input v-model="formdatas.jiance" class="check" type="text"  /></p>
				<p style=" width:48%; display: inline-block; margin: 0px; line-height: 1.2; font-family: &quot;Times New Roman&quot;; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">校 &nbsp;核</span><input v-model="formdatas.jiaohe" class="check" type="text"  /></p>
				<p style="margin: 0px; line-height: 1.2; font-family: Calibri; font-size: 11pt;"></p>
			</div>
		</div>
	</form>
</template>

<style>

</style>
<script>

//import SinograinPrompt from '@/components/common/prompt/Prompt.vue';

export default {
  components: {

  },
  computed:{

  },
  created(){

  },
  destroy(){

  },
  methods: {


  },
  data() {
    return {
		formdatas: {},
      codeUrl:'static/images/test/code.jpg',
      mjxsf1Url:'static/images/sys/mjxsf1.png',
    }
  }
}
</script>

