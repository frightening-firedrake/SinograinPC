<template>
	<form class="ui-body-bg">
		<img class="code" :src="codeUrl" alt="" />
		<div class="zw-page" style="margin-left: 113.4px; margin-right: 113.4px; column-count: 1; column-gap: 0px;">
			<div class="zw-header">
				<p style="margin: 0px; line-height: 1.2; font-family: Calibri; font-size: 11pt;"><br></p>
			</div>
			<div class="zw-contentpane">
				<p style="margin: 0px; line-height: 2.16667; text-align: center; font-family: 黑体; font-size: 18pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 黑体; font-size: 18pt;">山西中储粮粮油质监中心</span></p>
				<p style="margin: 0px; line-height: 2.16667; text-align: center; font-family: 黑体; font-size: 18pt; color: rgb(0, 0, 0); padding-bottom: 10.4px; padding-top: 0px; border-top: 0px;"><span style="font-family: 黑体; font-size: 18pt;">玉米品尝评分记录表</span></p>
				<div class="zw-header">
					<p style="margin: 0px 0 0px 0px; line-height: 2.16667; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">时间：{{formdatas.ym_riqi|data}}</span></p>
					<p style="margin: 0px 0 0px 0px; line-height: 2.16667; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;"> 品评员：<input style="text-align:left;" class="check" type="text" v-if='!readonly' v-model="formdatas.ym_pinpingyuan" />{{readonly?formdatas.ym_pinpingyuan:''}}</span></p>
					<p style="margin: 0px 0px 0px 35px; line-height: 2.16667; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">{{formdatas.table_version}}</span></p>
				</div>
				<table class="zw-table" data-node-id="node_02280918380844279" style=" direction: ltr; width: 6.40278in; border-collapse: collapse;">
					<colgroup>
						<col style="width: 0.85in;">
						<col style="width: 3.4in;">
						<col style="width: 0.42in;">
						<col style="width: 0.01in;">
						<col style="width: 0.42in;">
						<col style="width: 0.42in;">
						<col style="width: 0.42in;">
						<col style="width: 0.42in;">
					</colgroup>
					<tbody class="zw-tbody" style="vertical-align: top;">
						<tr class="zw-tr">
							<td class="zw-td" rowspan="2" merge="fc" style="border-width: 1.33333px 1px 0.666667px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 42.7333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">项 &nbsp;目</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="2" merge="fc" style="border-width: 1.33333px 1px 0.666667px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 42.7333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">得 &nbsp; 分 &nbsp; 标 &nbsp; 准</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 42.7333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">样 &nbsp;品 &nbsp;编 &nbsp;号</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" merge="vmp" style="border-width: 0.666667px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border-top:1px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>
							<td class="zw-td" merge="vmp" style="border-width: 0.666667px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border-top:1px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>

							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 57.6px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">监{{formdatas.smallSampleNum}}</p>
								</div>
							</td>

						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 106.067px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">窝头气味</span></p>
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（40分）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 106.067px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;  padding-left:6px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">正常清香： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 28.0分—40.0分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">较浓甜气味或轻微酒味等： &nbsp; &nbsp; &nbsp;24.0分—27.9分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">有辛辣味，哈味等： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;12.0分—23.9分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">有刺鼻辛辣味，严重哈味等： &nbsp; &nbsp; &nbsp; 0分—11.9分；</span></p>
								</div>
							</td>

							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 106.067px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input v-model.number="formdatas.wotouqiwei" class="check" type="text"  v-if='!readonly'/>{{readonly?formdatas.wotouqiwei:''}}</p>
								</div>
							</td>

						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 115.667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">窝头色泽</span></p>
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（10分）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 115.667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;   padding-left:6px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">正常： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 7.0分—10.0分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">变淡： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 6.0分—6.9分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">发灰发暗： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3.0分—5.9分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">严重发灰发暗： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0分—2.9分；</span></p>
								</div>
							</td>

							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 115.667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" v-model.number="formdatas.wotouseze" type="text"  v-if='!readonly'/>{{readonly?formdatas.wotouseze:''}}</p>
								</div>
							</td>

						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 115.667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">外观形状</span></p>
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（5分）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 115.667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;   padding-left:6px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">表明光滑，挺： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3.5分—5.0分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">表面光滑，有细小裂纹： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 3.0分—3.4分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">表面粗糙，有较多裂纹： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1.5分—2.9分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">表面非常粗糙，有较大裂纹： &nbsp; &nbsp; &nbsp; &nbsp; 0分—1.4分；</span></p>
								</div>
							</td>

							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 115.667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text" v-model.number="formdatas.waiguanxingzhuang" v-if='!readonly' />{{readonly?formdatas.waiguanxingzhuang:''}}</p>
								</div>
							</td>

						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 115.667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">内部形状</span></p>
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（5分）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 115.667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;   padding-left:6px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">正常，无色浅呈夹生状结块： &nbsp; &nbsp; &nbsp;3.5分—5.0分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">有少许色浅呈夹生状结块： &nbsp; &nbsp; &nbsp; &nbsp; 3.0分—3.4分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">有较多色浅呈夹生状结块： &nbsp; &nbsp; &nbsp; &nbsp; 1.5分—2.9分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">严重夹生状结块： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;0分—1.4分；</span></p>
								</div>
							</td>
							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 115.667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" v-if='!readonly' type="text" v-model.number="formdatas.neibuxingzhuang" />{{readonly?formdatas.neibuxingzhuang:''}}</p>
								</div>
							</td>
						</tr>
						<tr class="zw-tr">
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 115.667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">滋 &nbsp;味</span></p>
									<p style="margin: 0px; line-height: 1.91667; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">（40分）</span></p>
								</div>
							</td>
							<td class="zw-td" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 115.667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;  padding-left:6px;">
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">玉米固有香味，无异味： &nbsp; &nbsp; &nbsp; &nbsp; 28.0分—40.0分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">较浓甜气味，轻微发酵味等：&nbsp; 24.0分—27.9分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px; padding-bottom: 0px; border-bottom: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">无香甜味，后味发苦发哈等：&nbsp; 12.0分—23.9分；</span></p>
									<p style="margin: 0px; line-height: 1.2; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0); padding-top: 0px; border-top: 0px;"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">严重苦味、哈味、霉味等： &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 0分—11.9分；</span></p>
								</div>
							</td>

							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 115.667px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text" v-if='!readonly' v-model.number="formdatas.ziwei" />{{readonly?formdatas.ziwei:''}}</p>
								</div>
							</td>

						</tr>
						<tr class="zw-tr">
							<td class="zw-td" rowspan="1" colspan="2" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 92.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><span style="font-family: 仿宋_GB2312; font-size: 10.5pt;">品 &nbsp;尝 &nbsp;评 &nbsp;分 &nbsp;值</span></p>
								</div>
							</td>
							<td class="zw-td" merge="hmp" style="border-width: 0.666667px; border-style: solid; border-color: rgb(0, 0, 0); display: none;;border:1px solid rgb(0, 0, 0);border-top:1px solid rgb(0, 0, 0);border-bottom:1px solid rgb(0, 0, 0);border-left:1px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><input class="check" type="text"  v-if='!readonly'/></p>
								</div>
							</td>

							<td class="zw-td" rowspan="1" colspan="6" style="border-width: 1.33333px 1px 1.33333px 1.33333px; border-style: solid; border-color: rgb(0, 0, 0); vertical-align: middle; height: 92.3333px;;border-top:1.32813px solid rgb(0, 0, 0);border-bottom:1.32813px solid rgb(0, 0, 0);border-left:1.32813px solid rgb(0, 0, 0);border-right:1px solid rgb(0, 0, 0);background-color:rgba(0, 0, 0, 0);color:rgb(0, 0, 0)">
								<div class="zw-cell-container" style="position: relative;">
									<p style="margin: 0px; line-height: 1.2; text-align: center; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);">{{pinchangpingfenzhi}}</p>
								</div>
							</td>

						</tr>
					</tbody>
				</table>
				<p style="margin: 0px; line-height: 2.16667; font-family: 仿宋_GB2312; font-size: 10.5pt; color: rgb(0, 0, 0);"><br></p>
			</div>
			<div class="zw-footer">
				<!--				<p style="margin: 0px; line-height: 1.2; font-family: Calibri; font-size: 11pt;"><input class="check" type="text"  v-if='!readonly'/></p>-->
			</div>
			<div></div>
			<div></div>
		</div>
	</form>
</template>

<style>
</style>
<script>
//import SinograinPrompt from '@/components/common/prompt/Prompt.vue';
export default {
  props: ["formdatas", "readonly"],
  computed: {
    pinchangpingfenzhi() {
      var pinchangpingfenzhi =
        this.formdatas.wotouqiwei * 1 +
        this.formdatas.wotouseze * 1 +
        this.formdatas.waiguanxingzhuang * 1 +
        this.formdatas.neibuxingzhuang * 1 +
        this.formdatas.ziwei * 1;
      if (pinchangpingfenzhi !== 0 && !isNaN(pinchangpingfenzhi)) {
        return (this.formdatas.pinchangpingfenzhi = this.round(
          pinchangpingfenzhi,
          0
        ));
      }
      return (this.formdatas.pinchangpingfenzhi = "");
    },
    codeUrl() {
      return (
        this.apiRoot +
        "/grain/upload/smaBarcode/" +
        this.formdatas.smallSamplePic
      );
    }
  },
  created() {
    //	移除监听事件
    this.$root.eventHub.$off("printChecklist");
    //	监听打印事件
    this.$root.eventHub.$on(
      "printChecklist",
      function() {
        this.submit();
      }.bind(this)
    );
  },
  destroy() {
    this.$root.eventHub.$off("printChecklist");
  },
  methods: {
    submit() {
      for (var key in this.formdatas) {
        if (!this.formdatas[key]) {
          this.isEmpty = true;
          break;
        } else {
          this.isEmpty = false;
        }
      }
      if (this.isEmpty) {
        this.$alert("请完善表内信息", "提示信息", {});
      } else {
        this.$emit("submit", this.formdatas);
      }
    },
    round(num, digit) {
      var ratio = Math.pow(10, digit),
        _num = num * ratio, //倍数
        mod = _num % 1, //指定位置后小数
        integer = Math.floor(_num); //指定位向下取整
      //	        console.log(mod,integer)
      if (num === "") {
        return "";
      } else if (Math.floor(num) == num) {
        var str;
        if (digit == 0) {
          str = num;
        } else {
          str = num + ".";
          for (var i = 0; i < digit; i++) {
            str += "0";
          }
        }
        return str;
      } else if (mod > 0.5) {
        return ((integer + 1) / ratio).toFixed(digit);
      } else if (mod < 0.5) {
        if (integer / ratio == 0) {
          var str = "0.";
          for (var i = 0; i < digit; i++) {
            str += "0";
          }
          return str;
        } else {
          return (integer / ratio).toFixed(digit);
        }
      } else {
        return ((integer % 2 === 0 ? integer : integer + 1) / ratio).toFixed(
          digit
        );
      }
    }
  },
  data() {
    return {
      isEmpty: false,

      gs1Url: "static/images/sys/gs1.jpg",
      gs2Url: "static/images/sys/gs2.jpg",
      mjxsf1Url: "static/images/sys/mjxsf1.png",

      jianyanbianhao_1: "1",
      jianyanbianhao_2: "2",
      jsdjg: {}
    };
  },
  filters: {
    data: function(input) {
      var d = new Date(input);
      var year = d.getFullYear();
      var month = d.getMonth() + 1;
      var day = d.getDate() < 10 ? "0" + d.getDate() : "" + d.getDate();
      var hour = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      return year + "-" + month + "-" + day;
      //     return  year+ '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;
    }
  }
};
</script>